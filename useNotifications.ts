/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  collection, 
  query, 
  orderBy, 
  onSnapshot, 
  updateDoc, 
  doc, 
  writeBatch,
  addDoc,
  serverTimestamp
} from 'firebase/firestore';
import { db } from '../lib/firebase';

export interface AppNotification {
  id: string;
  title: string;
  message: string;
  type: 'success' | 'info' | 'warning' | 'error';
  read: boolean;
  createdAt: any;
}

// Static user ID for system-wide notifications in the absence of Auth
const SYSTEM_USER_ID = 'system_admin';

export function useNotifications() {
  const [notifications, setNotifications] = useState<AppNotification[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setError(null);
    const q = query(
      collection(db, 'users', SYSTEM_USER_ID, 'notifications'),
      orderBy('createdAt', 'desc')
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as AppNotification[];
      setNotifications(data);
      setLoading(false);
      setError(null);
    }, (err) => {
      console.error("Firestore Error:", err);
      setError("Unable to load notifications");
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const markAsRead = async (notificationId: string) => {
    try {
      const ref = doc(db, 'users', SYSTEM_USER_ID, 'notifications', notificationId);
      await updateDoc(ref, { read: true });
    } catch (err) {
      console.error("Firestore Error:", err);
    }
  };

  const markAllAsRead = async () => {
    if (notifications.length === 0) return;
    try {
      const batch = writeBatch(db);
      notifications.forEach(n => {
        if (!n.read) {
          const ref = doc(db, 'users', SYSTEM_USER_ID, 'notifications', n.id);
          batch.update(ref, { read: true });
        }
      });
      await batch.commit();
    } catch (err) {
      console.error("Firestore Error:", err);
    }
  };

  const addNotification = async (notif: Omit<AppNotification, 'id' | 'createdAt'>) => {
    try {
      await addDoc(collection(db, 'users', SYSTEM_USER_ID, 'notifications'), {
        ...notif,
        createdAt: serverTimestamp()
      });
    } catch (err) {
      console.error("Firestore Error:", err);
    }
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return { notifications, loading, error, unreadCount, markAsRead, markAllAsRead, addNotification };
}
