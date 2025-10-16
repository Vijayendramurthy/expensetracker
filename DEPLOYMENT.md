# 🚀 Deployment Configuration Guide

## API Endpoint Configuration

Your expense tracker is now configured to use the Render API endpoint.

### Backend (Render)
- **URL**: `https://expensetracker-xhqw.onrender.com`
- **Database**: MongoDB Atlas
- **Status**: Deployed on Render

### Frontend Configuration
- **API Base URL**: Configured to use Render backend
- **Environment Variable**: `REACT_APP_API_URL`

---

## Changes Made

### 1. Backend Updates

#### `server.js`
- ✅ Updated CORS to allow all origins
- ✅ Added specific HTTP methods (GET, POST, PUT, DELETE)
- ✅ Added Authorization header support
- ✅ Added health check route at `/`

#### `.env`
- ✅ Updated MongoDB URI to Atlas cluster:
  ```
  mongodb+srv://vijay:vijay@cluster0.ckw4vqc.mongodb.net/
  ```

### 2. Frontend Updates

#### `App.js`
- ✅ Added API base URL configuration
- ✅ Set axios default baseURL to Render endpoint
- ✅ Uses environment variable with fallback

#### `package.json`
- ✅ Removed local proxy setting
- ✅ Now uses full API URL for all requests

#### `.env` (new file)
- ✅ Created environment configuration:
  ```
  REACT_APP_API_URL=https://expensetracker-xhqw.onrender.com
  ```

---

## API Endpoints

All API calls now go to: `https://expensetracker-xhqw.onrender.com`

### Health Check
- **GET** `/` - Check if API is running

### Authentication
- **POST** `/api/auth/register` - Register new user
- **POST** `/api/auth/login` - Login user
- **GET** `/api/auth/me` - Get current user

### Expenses (Protected)
- **GET** `/api/expenses` - Get all user expenses
- **GET** `/api/expenses/:id` - Get single expense
- **POST** `/api/expenses` - Create expense
- **PUT** `/api/expenses/:id` - Update expense
- **DELETE** `/api/expenses/:id` - Delete expense
- **GET** `/api/expenses/stats/summary` - Get statistics

---

## Testing the API

### Test Backend Health
```bash
curl https://expensetracker-xhqw.onrender.com/
```

Expected response:
```json
{
  "message": "Expense Tracker API is running!",
  "status": "OK"
}
```

### Test Registration
```bash
curl -X POST https://expensetracker-xhqw.onrender.com/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","password":"password123"}'
```

---

## Running the Application

### Backend (Already deployed on Render)
Your backend is live at: `https://expensetracker-xhqw.onrender.com`

### Frontend (Local Development)
```powershell
cd c:\Users\vijay\OneDrive\Desktop\projects\expensetracker\frontend
npm start
```

The frontend will run on `http://localhost:3000` and connect to your Render backend.

---

## Environment Variables

### Backend (.env)
```env
PORT=5000
MONGODB_URI=mongodb+srv://vijay:vijay@cluster0.ckw4vqc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=your_jwt_secret_key_change_this_in_production
```

### Frontend (.env)
```env
REACT_APP_API_URL=https://expensetracker-xhqw.onrender.com
```

---

## Deployment Checklist

### Backend on Render ✅
- [x] Code deployed
- [x] Environment variables set
- [x] MongoDB Atlas connected
- [x] CORS configured
- [x] API endpoints working

### Frontend Deployment (Next Steps)
To deploy frontend to Vercel/Netlify:

1. **Build the frontend:**
   ```powershell
   cd frontend
   npm run build
   ```

2. **Deploy to Vercel:**
   ```powershell
   npm install -g vercel
   vercel
   ```

3. **Or Deploy to Netlify:**
   - Drag and drop the `build` folder to Netlify
   - Or use Netlify CLI

4. **Set Environment Variables:**
   - Add `REACT_APP_API_URL` in deployment settings

---

## CORS Configuration

Your backend now accepts requests from:
- ✅ Any origin (`*`)
- ✅ Methods: GET, POST, PUT, DELETE
- ✅ Headers: Content-Type, Authorization

For production, you may want to restrict origins:
```javascript
app.use(cors({
  origin: ['https://your-frontend-domain.com'],
  credentials: true
}));
```

---

## Troubleshooting

### "Network Error" or "CORS Error"
1. Check if backend is running: Visit `https://expensetracker-xhqw.onrender.com/`
2. Verify CORS settings in `server.js`
3. Check browser console for specific error

### "Cannot connect to database"
1. Verify MongoDB Atlas network access (allow `0.0.0.0/0`)
2. Check MongoDB URI in backend `.env`
3. Ensure MongoDB cluster is active

### "401 Unauthorized"
1. Check if JWT token is being sent
2. Verify JWT_SECRET matches between environments
3. Check Authorization header format: `Bearer <token>`

### Frontend not connecting to backend
1. Check `REACT_APP_API_URL` in frontend `.env`
2. Restart frontend dev server after changing `.env`
3. Clear browser cache and localStorage

---

## Security Notes

### Current Setup (Development)
- ⚠️ Database credentials in `.env`
- ⚠️ CORS allows all origins
- ⚠️ JWT_SECRET should be changed

### Production Recommendations
1. **Change JWT_SECRET** to a strong random string
2. **Restrict CORS** to your frontend domain only
3. **Use environment variables** on Render for sensitive data
4. **Enable HTTPS** (Render does this automatically)
5. **Add rate limiting** to prevent abuse
6. **Implement request validation**
7. **Add logging and monitoring**

---

## Next Steps

1. ✅ Backend is deployed and running on Render
2. ✅ Frontend is configured to use Render API
3. ⏳ Test all functionality locally
4. ⏳ Deploy frontend to Vercel/Netlify
5. ⏳ Update CORS to restrict to frontend domain
6. ⏳ Change JWT_SECRET to a secure value
7. ⏳ Set up monitoring and error tracking

---

## Useful Commands

### Check API Health
```powershell
curl https://expensetracker-xhqw.onrender.com/
```

### View Backend Logs (on Render)
- Go to Render dashboard
- Select your service
- Click on "Logs" tab

### Restart Backend (on Render)
- Go to Render dashboard
- Select your service
- Click "Manual Deploy" → "Clear build cache & deploy"

---

## Support

If you encounter issues:
1. Check Render logs for backend errors
2. Check browser console for frontend errors
3. Verify environment variables are set correctly
4. Test API endpoints using curl or Postman
5. Ensure MongoDB Atlas allows network access

---

Your application is now configured to work with the deployed Render backend! 🎉
