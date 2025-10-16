# 💰 Expense Tracker - MERN Stack Application

A full-stack expense tracker application built with MongoDB, Express.js, React, and Node.js.

## Features

- 🔐 **User Authentication** - Secure login and registration system
- ➕ Add new expenses with title, amount, category, date, and description
- ✏️ Edit existing expenses
- 🗑️ Delete expenses
- 📊 **Visual Analytics** - Beautiful charts and graphs with Chart.js
  - 📈 Daily expense bar chart
  - 🥧 Category distribution pie chart
  - 📉 Monthly spending trend line chart
  - 📊 Top categories horizontal bar chart
- 💵 Track total expenses and expense count
- 🎨 Beautiful and responsive UI with gradient design
- 📱 Mobile-friendly interface
- 👤 User-specific expense tracking

## Project Structure

```
expensetracker/
├── backend/
│   ├── middleware/
│   │   └── auth.js             # JWT authentication middleware
│   ├── models/
│   │   ├── Expense.js          # Mongoose expense model
│   │   └── User.js             # Mongoose user model
│   ├── routes/
│   │   ├── auth.js             # Authentication routes
│   │   └── expenses.js         # API routes for expenses
│   ├── .env                     # Environment variables
│   ├── server.js                # Express server setup
│   └── package.json
│
└── frontend/
    ├── public/
    ├── src/
    │   ├── components/
    │   │   ├── Header.js        # Header component with logout
    │   │   ├── Header.css
    │   │   ├── Login.js         # Login form component
    │   │   ├── Login.css
    │   │   ├── Register.js      # Registration form component
    │   │   ├── Register.css
    │   │   ├── ExpenseForm.js   # Form to add/edit expenses
    │   │   ├── ExpenseForm.css
    │   │   ├── ExpenseList.js   # List of all expenses
    │   │   ├── ExpenseList.css
    │   │   ├── ExpenseItem.js   # Individual expense item
    │   │   ├── ExpenseItem.css
    │   │   ├── ExpenseStats.js  # Statistics dashboard
    │   │   ├── ExpenseStats.css
    │   │   ├── ExpenseCharts.js # Charts and visualizations
    │   │   └── ExpenseCharts.css
    │   ├── App.js               # Main App component
    │   ├── App.css
    │   └── index.js
    └── package.json
```

## Technologies Used

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management
- **bcryptjs** - Password hashing
- **jsonwebtoken** - JWT authentication

### Frontend
- **React** - UI library
- **Axios** - HTTP client for API calls
- **Chart.js** - Data visualization library
- **react-chartjs-2** - React wrapper for Chart.js
- **CSS3** - Styling with gradients and modern design

## Prerequisites

Before running this application, make sure you have the following installed:

- Node.js (v14 or higher)
- MongoDB (running locally on port 27017) or MongoDB Atlas account
- npm or yarn package manager

## Installation & Setup

### 1. Clone or Navigate to the Project Directory

```bash
cd c:\Users\vijay\OneDrive\Desktop\projects\expensetracker
```

### 2. Backend Setup

```bash
# Navigate to backend folder
cd backend

# Install dependencies (already done)
npm install

# The .env file is already configured with:
# PORT=5000
# MONGODB_URI=mongodb://localhost:27017/expensetracker
# JWT_SECRET=your_jwt_secret_key_change_this_in_production

# IMPORTANT: Change JWT_SECRET to a secure random string in production!

# If using MongoDB Atlas, update the MONGODB_URI in .env file:
# MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/expensetracker
```

### 3. Frontend Setup

```bash
# Navigate to frontend folder
cd ..\frontend

# Install dependencies (already done)
npm install
```

## Running the Application

### Option 1: Run Backend and Frontend Separately

**Terminal 1 - Start Backend Server:**
```bash
cd backend
npm start
# Server will run on http://localhost:5000
```

**Terminal 2 - Start Frontend Development Server:**
```bash
cd frontend
npm start
# React app will run on http://localhost:3000
```

### Option 2: Use Development Mode with Auto-Reload (Backend)

```bash
cd backend
npm run dev
# Uses nodemon for auto-restart on file changes
```

## MongoDB Setup

### Local MongoDB
1. Make sure MongoDB is installed and running
2. Start MongoDB service:
   ```bash
   # Windows (if installed as service)
   net start MongoDB
   
   # Or run mongod directly
   mongod
   ```
3. The database `expensetracker` will be created automatically

### MongoDB Atlas (Cloud)
1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster
3. Get your connection string
4. Update `.env` file in backend with your connection string

## API Endpoints

### Authentication
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Login user |
| GET | `/api/auth/me` | Get current user |

### Expenses (Protected - Requires Authentication)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/expenses` | Get all expenses for logged-in user |
| GET | `/api/expenses/:id` | Get single expense |
| POST | `/api/expenses` | Create new expense |
| PUT | `/api/expenses/:id` | Update expense |
| DELETE | `/api/expenses/:id` | Delete expense |
| GET | `/api/expenses/stats/summary` | Get expense statistics |

## Expense Categories

The application supports the following expense categories:
- 🍔 Food
- 🚗 Transport
- 🛍️ Shopping
- 🎬 Entertainment
- 📄 Bills
- ⚕️ Health
- 📦 Other

## Usage

1. **Register/Login**: Create an account or login with existing credentials
2. **Add Expense**: Fill in the form at the top with title, amount, category, date, and optional description
3. **View Statistics**: See your total expenses, count, and category breakdown
4. **Analyze Charts**: View interactive charts showing spending patterns
5. **Edit Expense**: Click the "Edit" button on any expense item
6. **Delete Expense**: Click the "Delete" button and confirm
7. **Logout**: Click the logout button in the header

## Features in Detail

### Authentication System
- Secure user registration with password hashing (bcryptjs)
- JWT-based authentication
- Token stored in localStorage
- Protected routes and API endpoints
- Auto-login on page refresh
- User-specific expense isolation

### Expense Form
- Real-time form validation
- Support for editing existing expenses
- Date picker for selecting expense date
- Dropdown for category selection
- Optional description field

### Expense Statistics
- Total expense amount calculation
- Count of all expenses
- Top spending category
- Category-wise breakdown with amounts
- Color-coded categories

### Visual Analytics Dashboard
- **Daily Bar Chart** - Shows expenses for the last 10 days
- **Category Pie Chart** - Visual breakdown of spending by category with percentages
- **Monthly Trend Line Chart** - Track spending patterns over the last 6 months
- **Top Categories Bar Chart** - Horizontal bar chart showing highest spending categories
- Interactive tooltips with detailed information
- Responsive design that adapts to screen size
- Empty state message when no data is available

### Expense List
- Chronologically sorted expenses (newest first)
- Color-coded category badges
- Responsive design for mobile devices
- Edit and delete actions for each expense

## Troubleshooting

### Backend won't start
- Ensure MongoDB is running
- Check if port 5000 is available
- Verify .env file configuration

### Frontend can't connect to backend
- Make sure backend is running on port 5000
- Check the proxy setting in frontend/package.json
- Clear browser cache and restart

### Database connection errors
- Verify MongoDB is running
- Check MONGODB_URI in .env file
- Ensure network connectivity (for MongoDB Atlas)

## Future Enhancements

-  Date range filtering
- 📈 Charts and graphs for visualizations
- 📤 Export data to CSV/PDF
- 🔍 Search and filter functionality
- 🏷️ Custom categories
- 💱 Multiple currency support
- 📊 Monthly/yearly reports
- 🔄 Password reset functionality
- 👥 Profile management

## License

This project is open source and available for educational purposes.

## Author

Created as a MERN stack learning project.
