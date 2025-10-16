import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';

function ExpenseList({ expenses, onDeleteExpense, onEditExpense }) {
  if (expenses.length === 0) {
    return (
      <div className="expense-list-container">
        <div className="empty-state">
          <div className="empty-icon">📝</div>
          <h3>No expenses yet</h3>
          <p>Start tracking your expenses by adding your first one above!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="expense-list-container">
      <h2 className="list-title">📋 Your Expenses</h2>
      <div className="expense-list">
        {expenses.map(expense => (
          <ExpenseItem
            key={expense._id}
            expense={expense}
            onDelete={onDeleteExpense}
            onEdit={onEditExpense}
          />
        ))}
      </div>
    </div>
  );
}

export default ExpenseList;
