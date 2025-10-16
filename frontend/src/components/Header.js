import React from 'react';
import './Header.css';

function Header({ user, onLogout }) {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <h1 className="header-title">💰 Expense Tracker</h1>
          <p className="header-subtitle">Manage your finances with ease</p>
        </div>
        {user && (
          <div className="header-right">
            <span className="user-greeting">👋 Hello, {user.name}</span>
            <button className="logout-btn" onClick={onLogout}>
              🚪 Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
