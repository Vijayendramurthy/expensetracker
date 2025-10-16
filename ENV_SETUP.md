# 🔐 Environment Variables Configuration Guide

This guide explains how to set up environment variables for the Expense Tracker application.

## Overview

The application uses `.env` files to store sensitive configuration data like:
- Database connection strings
- API endpoints
- Secret keys

**Important:** Never commit `.env` files to version control!

---

## Backend Configuration

### Location
`backend/.env`

### Required Variables

#### PORT
```env
PORT=5000
```
- **Description**: Port number for the backend server
- **Default**: 5000
- **Usage**: The server will listen on this port

#### MONGODB_URI
```env
# Local MongoDB
MONGODB_URI=mongodb://localhost:27017/expensetracker

# OR MongoDB Atlas (Cloud)
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database?retryWrites=true&w=majority
```
- **Description**: MongoDB connection string
- **Format**: 
  - Local: `mongodb://localhost:27017/database_name`
  - Atlas: `mongodb+srv://user:pass@cluster.mongodb.net/db`
- **Usage**: Mongoose uses this to connect to the database

#### JWT_SECRET
```env
JWT_SECRET=your_secret_key_here
```
- **Description**: Secret key for JWT token generation
- **Format**: Any secure random string
- **Security**: MUST be changed in production
- **Generate**: Use `openssl rand -base64 32` or similar

### Setup Instructions

1. **Copy the example file:**
   ```powershell
   cd backend
   copy .env.example .env
   ```

2. **Edit the `.env` file:**
   - Update `MONGODB_URI` with your database URL
   - Change `JWT_SECRET` to a secure random string
   - Keep `PORT` as 5000 (or change if needed)

3. **Verify:**
   - Ensure `.env` is in `.gitignore`
   - Never commit the actual `.env` file

---

## Frontend Configuration

### Location
`frontend/.env`

### Required Variables

#### REACT_APP_API_URL
```env
# Local Development
REACT_APP_API_URL=http://localhost:5000

# OR Production (Render)
REACT_APP_API_URL=https://expensetracker-xhqw.onrender.com/
```
- **Description**: Backend API endpoint URL
- **Format**: Full URL with protocol (http:// or https://)
- **Note**: Must start with `REACT_APP_` for React to recognize it
- **Trailing slash**: Optional but recommended

### Setup Instructions

1. **Copy the example file:**
   ```powershell
   cd frontend
   copy .env.example .env
   ```

2. **Edit the `.env` file:**
   - For local dev: `http://localhost:5000`
   - For production: Your deployed backend URL

3. **Restart the server:**
   - React only reads `.env` on startup
   - Stop (Ctrl+C) and restart: `npm start`

---

## Environment-Specific Configurations

### Local Development

**Backend (`backend/.env`):**
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/expensetracker
JWT_SECRET=dev_secret_key_12345
```

**Frontend (`frontend/.env`):**
```env
REACT_APP_API_URL=http://localhost:5000
```

### Production (Render + Vercel)

**Backend (`backend/.env` on Render):**
```env
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/expensetracker?retryWrites=true&w=majority
JWT_SECRET=super_secure_random_production_key_xyz789
```

**Frontend (`frontend/.env` for Vercel):**
```env
REACT_APP_API_URL=https://expensetracker-xhqw.onrender.com/
```

---

## How to Use Environment Variables

### In Backend (Node.js)

```javascript
// Load environment variables
require('dotenv').config();

// Access variables
const port = process.env.PORT;
const dbUri = process.env.MONGODB_URI;
const jwtSecret = process.env.JWT_SECRET;
```

### In Frontend (React)

```javascript
// Access variables (must start with REACT_APP_)
const apiUrl = process.env.REACT_APP_API_URL;

// Check if defined
if (!process.env.REACT_APP_API_URL) {
  console.error('API URL not defined!');
}
```

---

## Setting Environment Variables on Deployment Platforms

### Render (Backend)

1. Go to your service dashboard
2. Click on "Environment"
3. Add variables:
   - `PORT`: 5000
   - `MONGODB_URI`: your_mongodb_uri
   - `JWT_SECRET`: your_secret_key
4. Click "Save Changes"
5. Service will automatically redeploy

### Vercel (Frontend)

1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add:
   - Name: `REACT_APP_API_URL`
   - Value: `https://your-backend.onrender.com/`
   - Environment: Production
4. Redeploy your application

### Netlify (Frontend)

1. Go to Site settings
2. Navigate to "Build & deploy" → "Environment"
3. Add variable:
   - Key: `REACT_APP_API_URL`
   - Value: `https://your-backend.onrender.com/`
4. Click "Save" and redeploy

---

## Security Best Practices

### ✅ DO

1. **Use `.env` files** for all sensitive data
2. **Add `.env` to `.gitignore`** immediately
3. **Use `.env.example`** for documentation
4. **Change default secrets** in production
5. **Use strong JWT secrets** (32+ characters)
6. **Rotate secrets** periodically
7. **Use different values** for dev/staging/production
8. **Set environment-specific variables** on deployment platforms

### ❌ DON'T

1. **Never commit `.env`** files to git
2. **Don't hardcode** URLs or secrets in code
3. **Don't share** `.env` files publicly
4. **Don't use weak** JWT secrets
5. **Don't reuse** production secrets in development
6. **Don't expose** secrets in error messages
7. **Don't log** environment variables

---

## Troubleshooting

### Backend won't start

**Error:** `undefined` for environment variables

**Solution:**
1. Check if `.env` file exists in backend folder
2. Verify `.env` syntax (no spaces around `=`)
3. Ensure `require('dotenv').config()` is at the top
4. Try: `node -r dotenv/config server.js`

### Frontend can't connect to backend

**Error:** Network error or undefined URL

**Solution:**
1. Check if `.env` file exists in frontend folder
2. Verify variable starts with `REACT_APP_`
3. Restart development server: `npm start`
4. Check browser console for the API URL
5. Verify backend is running and accessible

### MongoDB connection fails

**Error:** Connection refused or authentication failed

**Solution:**
1. Verify `MONGODB_URI` format
2. Check MongoDB Atlas Network Access (whitelist IP)
3. Ensure database user has proper permissions
4. Test connection string separately
5. Check for special characters in password (URL encode if needed)

### JWT errors

**Error:** Invalid token or signature verification failed

**Solution:**
1. Ensure `JWT_SECRET` is set
2. Same secret must be used for signing and verification
3. Secret should be at least 32 characters
4. Clear browser localStorage and login again

---

## Example Files

### backend/.env.example
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/expensetracker
JWT_SECRET=your_secret_key_here
```

### frontend/.env.example
```env
REACT_APP_API_URL=http://localhost:5000
```

### backend/.env (Production)
```env
PORT=5000
MONGODB_URI=mongodb+srv://vijay:vijay@cluster0.ckw4vqc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=super_secure_random_string_xyz789abc123def456
```

### frontend/.env (Production)
```env
REACT_APP_API_URL=https://expensetracker-xhqw.onrender.com/
```

---

## Quick Setup Checklist

- [ ] Copy `.env.example` to `.env` in both folders
- [ ] Update `MONGODB_URI` in backend `.env`
- [ ] Change `JWT_SECRET` to a secure value
- [ ] Set `REACT_APP_API_URL` in frontend `.env`
- [ ] Verify `.env` is in `.gitignore`
- [ ] Test locally before deploying
- [ ] Set environment variables on deployment platforms
- [ ] Never commit `.env` files

---

## Summary

✅ **Backend uses:**
- `PORT` - Server port
- `MONGODB_URI` - Database connection
- `JWT_SECRET` - Token security

✅ **Frontend uses:**
- `REACT_APP_API_URL` - Backend API endpoint

✅ **All sensitive data** is in `.env` files
✅ **No hardcoded** URLs or secrets in code
✅ **Git ignores** `.env` files
✅ **Examples provided** in `.env.example` files

Your application is now properly configured with environment variables! 🎉
