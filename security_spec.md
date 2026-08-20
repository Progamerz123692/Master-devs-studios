# Security Specification

## Data Invariants
1. A user can only read and write their own profile document.
2. A user can only read and write their own notifications.
3. System fields like `createdAt` are immutable after creation.
4. `updatedAt` must be updated to `request.time` on every update.

## The Dirty Dozen Payloads
1. Attempt to read another user's profile. (PERMISSION_DENIED)
2. Attempt to write another user's profile. (PERMISSION_DENIED)
3. Attempt to read another user's notifications. (PERMISSION_DENIED)
4. Attempt to write another user's notifications. (PERMISSION_DENIED)
5. Attempt to create a user profile without a `fullName`. (PERMISSION_DENIED)
6. Attempt to update `createdAt` field in user profile. (PERMISSION_DENIED)
7. Attempt to create a notification for another user. (PERMISSION_DENIED)
8. Attempt to set `email` to an invalid format. (PERMISSION_DENIED)
9. Attempt to set `fullName` longer than 100 characters. (PERMISSION_DENIED)
10. Attempt to update a user profile while not signed in. (PERMISSION_DENIED)
11. Attempt to delete another user's profile. (PERMISSION_DENIED)
12. Attempt to bypass `updatedAt` field being `request.time`. (PERMISSION_DENIED)
