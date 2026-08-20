/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Employee } from '../types';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

/**
 * Fetches the list of employees from the API.
 * Handles network errors and non-200 responses.
 */
export async function fetchEmployees(): Promise<Employee[]> {
  try {
    const response = await fetch(API_URL);
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    return data as Employee[];
  } catch (error) {
    console.error('Failed to fetch employees:', error);
    throw error;
  }
}
