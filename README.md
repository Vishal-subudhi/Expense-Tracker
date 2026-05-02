# Expense Tracker 💰

A React expense tracking app with income/expense management, category breakdown, and a pie chart visualization.

## Features
- Add income and expense transactions with description, amount, category, date, and type
- Real-time summary cards — Total Income, Total Expenses, Balance
- Color-coded balance (blue when positive, orange when negative)
- Pie chart showing expense breakdown by category (Chart.js)
- Delete individual transactions
- localStorage persistence — transactions survive page refresh
- Empty state handling for transaction list and chart
- Guard clause — prevents submitting empty forms

## Tech Stack
- React + Vite
- Tailwind CSS v3
- Chart.js + react-chartjs-2
- localStorage API

## How to run
1. Clone the repo
2. Run `npm install`
3. Run `npm run dev`

## Component Structure
```
App (useReducer state owner)
  ├── Navbar
  ├── ExpenseForm (controlled form + dispatch ADD_TRANSACTION)
  ├── SummarySection (income, expense, balance calculations)
  ├── TransactionList (list + dispatch DELETE_TRANSACTION)
  └── ChartSection (Pie chart by category)
```

## Key Concepts Used
- **useReducer** — manages all transaction state through ADD_TRANSACTION and DELETE_TRANSACTION actions
- **localStorage** — persists transactions between sessions using useEffect
- **Chart.js** — renders pie chart from category totals calculated with .reduce()
- **Controlled forms** — all inputs managed via useState with a single handleChange handler
- **Computed property names** — `[e.target.name]: e.target.value` handles all form fields dynamically

## Reducer Actions
```js
dispatch({ type: "ADD_TRANSACTION", payload: transaction })
dispatch({ type: "DELETE_TRANSACTION", payload: id })
```

## Reflection
**Project:** Expense Tracker  
**Date completed:** 03/05/2026  
**What I built:** An expense tracker that tracks income and expenses with a pie chart showing expense breakdown by category  
**Main concepts learned:** useReducer, switch statements, Chart.js, localStorage persistence  
**What was hardest:** Coding the chart section and transaction mapping  
**What I'd do differently:** Add more features like category cards and filtering  
**Feature I added myself:** localStorage persistence so transactions survive page refresh  
**Time taken:** 5 days  

## Live Demo
[GitHub Repo](https://github.com/Vishal-subudhi/Expense-Tracker)
