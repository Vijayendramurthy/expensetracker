# Expense Tracker Startup Guide

## Quick Start Commands

### Check if MongoDB is running:
```powershell
# Check if MongoDB service is running (Windows)
Get-Service -Name MongoDB
```

### Start MongoDB (if not running):
```powershell
# Start MongoDB service (Windows)
net start MongoDB

# OR if MongoDB is not installed as a service, run:
mongod
```

### Start Backend Server:
```powershell
# Open Terminal 1 - Navigate to backend folder
cd c:\Users\vijay\OneDrive\Desktop\projects\expensetracker\backend

# Start the server
node server.js

# Backend will run on http://localhost:5000
```

### Start Frontend Server:
```powershell
# Open Terminal 2 - Navigate to frontend folder  
cd c:\Users\vijay\OneDrive\Desktop\projects\expensetracker\frontend

# Start the development server
npm start

# Frontend will run on http://localhost:3000
```

## Using Development Mode (Backend with Auto-Reload)

```powershell
cd c:\Users\vijay\OneDrive\Desktop\projects\expensetracker\backend
npx nodemon server.js
```

## First Time Setup

### 1. Install Backend Dependencies
```powershell
cd c:\Users\vijay\OneDrive\Desktop\projects\expensetracker\backend
npm install
```

### 2. Install Frontend Dependencies
```powershell
cd c:\Users\vijay\OneDrive\Desktop\projects\expensetracker\frontend
npm install
```

### 3. Configure Environment Variables
The `.env` file in the backend folder is already configured. If needed, update:
- `MONGODB_URI`: Your MongoDB connection string
- `JWT_SECRET`: A secure secret key for JWT tokens (change in production!)

## Testing the Application

1. Make sure MongoDB is running
2. Start the backend server (Terminal 1)
3. Start the frontend server (Terminal 2)
4. Open browser to http://localhost:3000
5. Register a new account
6. Login with your credentials
7. Add test expenses
8. Try editing and deleting expenses
9. Check the statistics section
10. Test logout functionality

## Authentication Flow

1. **Register**: Create a new account with name, email, and password
2. **Login**: Login with email and password
3. **Token**: JWT token is stored in browser localStorage
4. **Protected Routes**: All expense operations require authentication
5. **Logout**: Removes token and returns to login screen

## Common Issues

### "MongoDB not found" error:
- Install MongoDB from https://www.mongodb.com/try/download/community
- Or use MongoDB Atlas (cloud) - update .env file with connection string

### Port already in use:
- Backend (5000): Change PORT in backend/.env file
- Frontend (3000): React will offer to run on different port automatically

### "Cannot connect to backend" error:
- Make sure backend server is running on port 5000
- Check http://localhost:5000 in browser
- Verify proxy setting in frontend/package.json

### ".env file not loaded" error:
- Make sure you're running `node server.js` from within the backend directory
- Verify .env file exists in backend folder
- Check that dotenv package is installed

### "Token is not valid" error:
- Try logging out and logging in again
- Clear browser localStorage
- Make sure JWT_SECRET matches between .env and what was used to create tokens
