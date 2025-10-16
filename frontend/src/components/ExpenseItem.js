import React from 'react';
import './ExpenseItem.css';

function ExpenseItem({ expense, onDelete, onEdit }) {
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

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

  const getCategoryColor = (category) => {
    const colors = {
      Food: '#ff6b6b',
      Transport: '#4ecdc4',
      Shopping: '#45b7d1',
      Entertainment: '#f9ca24',
      Bills: '#6c5ce7',
      Health: '#00b894',
      Other: '#95a5a6'
    };
    return colors[category] || '#95a5a6';
  };

  return (
    <div className="expense-item">
      <div className="expense-main">
        <div 
          className="expense-category-badge" 
          style={{ backgroundColor: getCategoryColor(expense.category) }}
        >
          <span className="category-icon">{getCategoryIcon(expense.category)}</span>
          <span className="category-text">{expense.category}</span>
        </div>
        
        <div className="expense-details">
          <h3 className="expense-title">{expense.title}</h3>
          {expense.description && (
            <p className="expense-description">{expense.description}</p>
          )}
          <span className="expense-date">📅 {formatDate(expense.date)}</span>
        </div>
        
        <div className="expense-amount">
          ${expense.amount.toFixed(2)}
        </div>
      </div>
      
      <div className="expense-actions">
        <button 
          className="btn-edit" 
          onClick={() => onEdit(expense)}
          title="Edit expense"
        >
          ✏️ Edit
        </button>
        <button 
          className="btn-delete" 
          onClick={() => onDelete(expense._id)}
          title="Delete expense"
        >
          🗑️ Delete
        </button>
      </div>
    </div>
  );
}

export default ExpenseItem;
