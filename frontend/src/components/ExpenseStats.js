import React from 'react';
import './ExpenseStats.css';

function ExpenseStats({ expenses }) {
  const calculateStats = () => {
    const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    
    const categoryStats = expenses.reduce((acc, expense) => {
      if (!acc[expense.category]) {
        acc[expense.category] = 0;
      }
      acc[expense.category] += expense.amount;
      return acc;
    }, {});

    const topCategory = Object.keys(categoryStats).reduce((a, b) => 
      categoryStats[a] > categoryStats[b] ? a : b, 'None'
    );

    return { total, count: expenses.length, topCategory, categoryStats };
  };

  const stats = calculateStats();

  const getCategoryIcon = (category) => {
    const icons = {
      Food: '🍔',
      Transport: '🚗',
      Shopping: '🛍️',
      Entertainment: '🎬',
      Bills: '📄',
      Health: '⚕️',
      Other: '📦'
    };
    return icons[category] || '📦';
  };

  return (
    <div className="expense-stats">
      <div className="stats-summary">
        <div className="stat-card">
          <div className="stat-icon">💵</div>
          <div className="stat-info">
            <h3>Total Expenses</h3>
            <p className="stat-value">${stats.total.toFixed(2)}</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">📊</div>
          <div className="stat-info">
            <h3>Total Count</h3>
            <p className="stat-value">{stats.count}</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">🏆</div>
          <div className="stat-info">
            <h3>Top Category</h3>
            <p className="stat-value">{stats.topCategory}</p>
          </div>
        </div>
      </div>

      {Object.keys(stats.categoryStats).length > 0 && (
        <div className="category-breakdown">
          <h3>Category Breakdown</h3>
          <div className="category-grid">
            {Object.entries(stats.categoryStats).map(([category, amount]) => (
              <div key={category} className="category-item">
                <span className="category-icon">{getCategoryIcon(category)}</span>
                <span className="category-name">{category}</span>
                <span className="category-amount">${amount.toFixed(2)}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ExpenseStats;
