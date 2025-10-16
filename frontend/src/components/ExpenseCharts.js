import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
} from 'chart.js';
import { Bar, Pie, Line } from 'react-chartjs-2';
import './ExpenseCharts.css';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
);

function ExpenseCharts({ expenses }) {
  // Calculate category data for pie chart
  const getCategoryData = () => {
    const categoryTotals = expenses.reduce((acc, expense) => {
      if (!acc[expense.category]) {
        acc[expense.category] = 0;
      }
      acc[expense.category] += expense.amount;
      return acc;
    }, {});

    return {
      labels: Object.keys(categoryTotals),
      datasets: [
        {
          label: 'Amount Spent',
          data: Object.values(categoryTotals),
          backgroundColor: [
            '#ff6b6b',
            '#4ecdc4',
            '#45b7d1',
            '#f9ca24',
            '#6c5ce7',
            '#00b894',
            '#95a5a6',
          ],
          borderColor: '#fff',
          borderWidth: 2,
        },
      ],
    };
  };

  // Calculate daily expenses for bar chart
  const getDailyData = () => {
    const dailyTotals = {};
    
    expenses.forEach(expense => {
      const date = new Date(expense.date).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric'
      });
      if (!dailyTotals[date]) {
        dailyTotals[date] = 0;
      }
      dailyTotals[date] += expense.amount;
    });

    // Sort by date and get last 10 days
    const sortedDates = Object.keys(dailyTotals).sort((a, b) => {
      return new Date(a) - new Date(b);
    }).slice(-10);

    return {
      labels: sortedDates,
      datasets: [
        {
          label: 'Daily Expenses',
          data: sortedDates.map(date => dailyTotals[date]),
          backgroundColor: 'rgba(102, 126, 234, 0.6)',
          borderColor: 'rgba(102, 126, 234, 1)',
          borderWidth: 2,
          borderRadius: 8,
        },
      ],
    };
  };

  // Calculate monthly trend for line chart
  const getMonthlyTrend = () => {
    const monthlyTotals = {};
    
    expenses.forEach(expense => {
      const date = new Date(expense.date);
      const monthYear = `${date.toLocaleDateString('en-US', { month: 'short' })} ${date.getFullYear()}`;
      
      if (!monthlyTotals[monthYear]) {
        monthlyTotals[monthYear] = 0;
      }
      monthlyTotals[monthYear] += expense.amount;
    });

    const sortedMonths = Object.keys(monthlyTotals).slice(-6);

    return {
      labels: sortedMonths,
      datasets: [
        {
          label: 'Monthly Trend',
          data: sortedMonths.map(month => monthlyTotals[month]),
          borderColor: 'rgba(118, 75, 162, 1)',
          backgroundColor: 'rgba(118, 75, 162, 0.1)',
          tension: 0.4,
          fill: true,
          pointRadius: 5,
          pointBackgroundColor: 'rgba(118, 75, 162, 1)',
          pointBorderColor: '#fff',
          pointBorderWidth: 2,
        },
      ],
    };
  };

  // Calculate category distribution for horizontal bar chart
  const getCategoryBarData = () => {
    const categoryTotals = expenses.reduce((acc, expense) => {
      if (!acc[expense.category]) {
        acc[expense.category] = 0;
      }
      acc[expense.category] += expense.amount;
      return acc;
    }, {});

    const sortedCategories = Object.entries(categoryTotals)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 7);

    return {
      labels: sortedCategories.map(([category]) => category),
      datasets: [
        {
          label: 'Amount by Category',
          data: sortedCategories.map(([, amount]) => amount),
          backgroundColor: [
            'rgba(255, 107, 107, 0.6)',
            'rgba(78, 205, 196, 0.6)',
            'rgba(69, 183, 209, 0.6)',
            'rgba(249, 202, 36, 0.6)',
            'rgba(108, 92, 231, 0.6)',
            'rgba(0, 184, 148, 0.6)',
            'rgba(149, 165, 166, 0.6)',
          ],
          borderColor: [
            'rgba(255, 107, 107, 1)',
            'rgba(78, 205, 196, 1)',
            'rgba(69, 183, 209, 1)',
            'rgba(249, 202, 36, 1)',
            'rgba(108, 92, 231, 1)',
            'rgba(0, 184, 148, 1)',
            'rgba(149, 165, 166, 1)',
          ],
          borderWidth: 2,
          borderRadius: 8,
        },
      ],
    };
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Daily Expenses (Last 10 Days)',
        font: {
          size: 16,
          weight: 'bold',
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => `$${context.parsed.y.toFixed(2)}`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value) => `$${value}`,
        },
      },
    },
  };

  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: 'Expenses by Category',
        font: {
          size: 16,
          weight: 'bold',
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.label || '';
            const value = context.parsed || 0;
            const total = context.dataset.data.reduce((a, b) => a + b, 0);
            const percentage = ((value / total) * 100).toFixed(1);
            return `${label}: $${value.toFixed(2)} (${percentage}%)`;
          },
        },
      },
    },
  };

  const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Monthly Spending Trend',
        font: {
          size: 16,
          weight: 'bold',
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => `$${context.parsed.y.toFixed(2)}`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value) => `$${value}`,
        },
      },
    },
  };

  const horizontalBarOptions = {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Top Categories',
        font: {
          size: 16,
          weight: 'bold',
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => `$${context.parsed.x.toFixed(2)}`,
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          callback: (value) => `$${value}`,
        },
      },
    },
  };

  if (expenses.length === 0) {
    return (
      <div className="expense-charts">
        <div className="empty-charts">
          <div className="empty-icon">📊</div>
          <h3>No data to visualize</h3>
          <p>Add some expenses to see beautiful charts and graphs!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="expense-charts">
      <h2 className="charts-title">📊 Expense Analytics</h2>
      
      <div className="charts-grid">
        {/* Daily Bar Chart */}
        <div className="chart-card">
          <div className="chart-container">
            <Bar data={getDailyData()} options={barOptions} />
          </div>
        </div>

        {/* Category Pie Chart */}
        <div className="chart-card">
          <div className="chart-container">
            <Pie data={getCategoryData()} options={pieOptions} />
          </div>
        </div>

        {/* Monthly Trend Line Chart */}
        <div className="chart-card chart-card-wide">
          <div className="chart-container">
            <Line data={getMonthlyTrend()} options={lineOptions} />
          </div>
        </div>

        {/* Category Horizontal Bar Chart */}
        <div className="chart-card chart-card-wide">
          <div className="chart-container">
            <Bar data={getCategoryBarData()} options={horizontalBarOptions} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpenseCharts;
