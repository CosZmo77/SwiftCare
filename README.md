# SwiftCare - Doctors Appointment

## Description
**SwiftCare** is a comprehensive Doctors Appointment Management System built on the MERN stack. This system includes features such as secure user authentication, efficient appointment scheduling, patient record management, and real-time communication between doctors and patients. It provides a scalable and user-friendly platform to streamline healthcare workflows and improve the hospital experience.

## Features
- **User Authentication**: Secure login for patients, doctors, and administrators.
- **Appointment Scheduling**: Easy booking, rescheduling, and cancellation of appointments.
- **Patient Records Management**: Store, access, and update patient health records.
- **Doctor-Patient Communication**: Real-time messaging for consultations and follow-ups.
- **Admin Dashboard**: Manage users, appointments, and view analytics.
- **Secure Data Storage**: Ensure patient privacy and data security with MongoDB.

## Tech Stack
- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js and Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **State Management**: Redux (optional)

## Getting Started
Follow these instructions to set up the project locally.

### Prerequisites
- Node.js installed
- MongoDB installed or access to a MongoDB cloud instance
- Git installed

### Installation
1. **Clone the repository**
   ```bash
   git https://github.com/CosZmo77/SwiftCare.git


## Install dependencies

1. **Install admin dependencies**
   ```bash
   cd admin
   npm install
   ```

2. **Install frontend dependencies**
   ```bash
   cd frontend
   npm install
   ```

3. **Set up environment variables**
   In the server directory, create a .env file with the following:
   ```bash

   MONGODB_URI= 'your_mongodb_connection_string'
  
   CLOUDINARY_NAME=''
   CLOUDINARY_API_KEY=''
   CLOUDINARY_SECRET_KEY=''

   ADMIN_EMAIL='admin@new.com'
   ADMIN_PASSWORD='root@1234'

   JWT_SECRET='Your Secret Key Can Be Anything'

   RAZORPAY_KEY_ID=''
   RAZORPAY_KEY_SECRET=''
   CURRENCY='INR'
   ```
  and In Frontend and Admin create a .env file and Add Backend url pointing to it 

   Run the application

4. **Start server:**
   ```bash
   cd backend
   npm run server
   ```

5. **Start Admin Panel:**
   ```bash
   cd admin
   npm run dev
   ```

6. **Start Frontend Panel:**
   ```bash
   cd frontend
   npm run dev
   ```


# Enjoy
