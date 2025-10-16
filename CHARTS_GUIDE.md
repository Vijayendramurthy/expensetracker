# 📊 Expense Tracker - Charts & Visualizations Guide

## Overview

The expense tracker now includes beautiful, interactive charts and graphs powered by Chart.js to visualize your spending patterns.

## Available Charts

### 1. 📈 Daily Expense Bar Chart
- **Purpose**: Shows your daily spending for the last 10 days
- **Type**: Vertical Bar Chart
- **Features**:
  - Color-coded bars (gradient purple)
  - Rounded corners for modern look
  - Hover tooltips showing exact amounts
  - Y-axis formatted with dollar signs
  - Automatically sorts by date

**Use Case**: Track your daily spending habits and identify days with high expenses

---

### 2. 🥧 Category Pie Chart
- **Purpose**: Visual breakdown of expenses by category
- **Type**: Pie Chart
- **Features**:
  - Each category has a unique color
  - Shows percentage and amount on hover
  - Legend on the right side
  - Interactive - click to highlight sections
  - 7 distinct colors for categories

**Use Case**: See at a glance where most of your money is going

**Category Colors**:
- Food: Red (#ff6b6b)
- Transport: Teal (#4ecdc4)
- Shopping: Blue (#45b7d1)
- Entertainment: Yellow (#f9ca24)
- Bills: Purple (#6c5ce7)
- Health: Green (#00b894)
- Other: Gray (#95a5a6)

---

### 3. 📉 Monthly Spending Trend (Line Chart)
- **Purpose**: Track spending patterns over the last 6 months
- **Type**: Area Line Chart
- **Features**:
  - Smooth curved line (tension: 0.4)
  - Filled area under the line
  - Gradient purple color scheme
  - Point markers at each month
  - Hover to see exact monthly total

**Use Case**: Identify spending trends, seasonal patterns, and track progress over time

---

### 4. 📊 Top Categories (Horizontal Bar Chart)
- **Purpose**: Shows highest spending categories ranked
- **Type**: Horizontal Bar Chart
- **Features**:
  - Up to 7 top categories displayed
  - Sorted from highest to lowest
  - Color-coded by category
  - Rounded bar edges
  - X-axis shows dollar amounts

**Use Case**: Quickly identify your biggest expense categories

---

## Chart Features

### Interactive Elements
- **Hover Tooltips**: Hover over any chart element to see detailed information
- **Responsive Design**: Charts adapt to screen size (mobile, tablet, desktop)
- **Smooth Animations**: Charts animate when data updates
- **Click Interactions**: Click legend items to show/hide data

### Data Processing
- **Automatic Aggregation**: Data is automatically grouped by day/month/category
- **Smart Sorting**: Charts show most recent or most relevant data
- **Empty States**: Friendly message shown when no data is available
- **Real-time Updates**: Charts update immediately when you add/edit/delete expenses

### Visual Design
- **Consistent Color Scheme**: Matches the app's purple gradient theme
- **White Cards**: Charts displayed on clean white cards with shadows
- **Hover Effects**: Cards lift slightly on hover
- **Print Friendly**: Charts are optimized for printing

---

## Technical Details

### Libraries Used
- **Chart.js v4.5+**: Core charting library
- **react-chartjs-2 v5.3+**: React wrapper for Chart.js

### Chart Configuration

#### Registered Components
```javascript
- CategoryScale (for bar charts)
- LinearScale (for numeric axes)
- BarElement (for bar charts)
- ArcElement (for pie charts)
- PointElement (for line charts)
- LineElement (for line charts)
- Title, Tooltip, Legend (for all charts)
```

#### Responsive Behavior
- **Desktop (>1200px)**: 2-column grid layout
- **Tablet (768px-1200px)**: Single column layout
- **Mobile (<768px)**: Single column with adjusted heights

---

## Chart Data Calculations

### Daily Expenses
```
1. Group expenses by date (formatted as "Mon DD")
2. Sum amounts for each date
3. Sort chronologically
4. Take last 10 days
```

### Category Distribution
```
1. Group expenses by category
2. Sum amounts for each category
3. Calculate percentages
4. Display all categories with data
```

### Monthly Trend
```
1. Group expenses by month and year
2. Sum amounts for each month
3. Sort chronologically
4. Take last 6 months
```

### Top Categories
```
1. Group expenses by category
2. Sum amounts for each category
3. Sort by amount (descending)
4. Take top 7 categories
```

---

## Customization

### Adding New Chart Types

To add a new chart type:

1. Import the chart type from react-chartjs-2
2. Register required Chart.js components
3. Create data preparation function
4. Define chart options
5. Add to the charts grid

### Changing Colors

Colors are defined in the chart data:
- **backgroundColor**: Fill color
- **borderColor**: Border/line color
- Update the color arrays to change scheme

### Adjusting Time Ranges

Current defaults:
- Daily chart: Last 10 days
- Monthly chart: Last 6 months

To change: Modify the `.slice()` values in data functions

---

## Performance Considerations

### Optimization Tips
1. Charts only render when data is available
2. Memoization can be added for large datasets
3. Chart animations can be disabled if needed
4. Responsive settings prevent excessive re-renders

### Data Limits
- No hard limits, but optimal performance with:
  - Up to 100 expenses for smooth rendering
  - Charts automatically aggregate data
  - Only relevant time periods shown

---

## Accessibility

### Screen Readers
- Chart titles are readable
- Tooltip information is accessible
- Alternative data views in ExpenseStats component

### Keyboard Navigation
- Tab through chart elements
- Legend items can be toggled
- Full keyboard support

---

## Browser Compatibility

**Supported Browsers**:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

**Required Features**:
- Canvas API
- ES6 JavaScript
- CSS Grid

---

## Future Enhancements

Potential additions:
- **Date Range Filters**: Select custom date ranges
- **Export Charts**: Download as PNG/PDF
- **More Chart Types**: Doughnut, Radar, Bubble charts
- **Comparison Views**: Compare months or categories
- **Budget Lines**: Show budget limits on charts
- **Annotations**: Mark special dates or events
- **Animation Controls**: Toggle animations on/off
- **Theme Switcher**: Dark mode for charts

---

## Troubleshooting

### Charts Not Displaying
1. Check browser console for errors
2. Verify Chart.js is installed: `npm list chart.js`
3. Ensure all Chart.js components are registered
4. Check that expenses data is not empty

### Chart Too Small/Large
- Charts use fixed heights (350px, 300px, 280px)
- Adjust `.chart-container` height in CSS
- Check responsive breakpoints

### Performance Issues
- Reduce number of data points
- Disable animations: `animation: false` in options
- Use `maintainAspectRatio: false`

### Colors Not Showing
- Verify color arrays match data length
- Check CSS doesn't override chart styles
- Ensure rgba/hex colors are valid

---

## Best Practices

1. **Add Regular Data**: Charts are most useful with consistent expense entries
2. **Use Categories**: Proper categorization improves pie chart accuracy
3. **Check Mobile**: View charts on mobile devices for best experience
4. **Print Setup**: Use landscape orientation for better chart printing
5. **Browser Updates**: Keep browsers updated for best Chart.js performance

---

## Resources

- [Chart.js Documentation](https://www.chartjs.org/docs/latest/)
- [react-chartjs-2 GitHub](https://github.com/reactchartjs/react-chartjs-2)
- [Chart.js Samples](https://www.chartjs.org/docs/latest/samples/)

---

## Summary

The charts feature provides powerful visual insights into your spending patterns. With four different chart types, you can:
- Track daily spending habits
- Identify top expense categories
- Monitor monthly trends
- Make data-driven financial decisions

All charts are interactive, responsive, and update in real-time as you manage your expenses!
