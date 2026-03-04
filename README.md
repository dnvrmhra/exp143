Concurrent Ticket Booking System

Aim:
To create a concurrent ticket booking system with seat locking using Redis.

Technologies Used:
- Node.js
- Express.js
- Redis
- Artillery (Load testing)

Features:
- Redis based seat locking
- Prevents double booking
- Supports concurrent users


Example response:

{
 "success": true,
 "bookingId": 1718369248709,
 "remaining": 99
}


Load Testing:
Artillery was used to simulate concurrent users.

Test configuration:
20 users per second for 10 seconds.

Results:
- Total Requests: 200
- Successful Bookings: 195
- Locked Requests: 5

Conclusion:
The system successfully handles concurrent booking requests using Redis locking to prevent seat conflicts.
