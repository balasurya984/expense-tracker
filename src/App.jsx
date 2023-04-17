import { getAllExpenses, addExpense } from '../api';
import './App.css'
import ExpenseItem from './components/expenses/expense_item/ExpenseItem'
import Expenses from './components/expenses/Expenses';
import NewExpense from './components/new_expenses/NewExpense';
import { useEffect, useState } from 'react';

// const DUMMY_DATA = [
//   {
//     id: 'e1',
//     title: 'Groceries',
//     amount: 94.12,
//     date: new Date(2021, 7, 14),
//   },
//   { id: 'e2', 
//     title: 'New Mobile', 
//     amount: 799.49, 
//     date: new Date(2020, 2, 12) },
//   {
//     id: 'e3',
//     title: 'Car Repair',
//     amount: 294.67,
//     date: new Date(2021, 2, 28),
//   },
//   {
//     id: 'e4',
//     title: 'New work desk',
//     amount: 450,
//     date: new Date(2021, 5, 12),
//   },
// ];

function App() {
   const [expenses, setExpenses] = useState([])

  useEffect( () => {
    getAllExpenses(setExpenses)
  },[])

  const onAddNewExpeseItem = (expense) => {
    console.log(expense)
    addExpense(expense, ()=>{
      setExpenses((previous_expenses)=>{
        return [expense, ...previous_expenses]
    })
    })

  }
  return (
    <div className="App">
      <NewExpense submitAction={onAddNewExpeseItem} />
      <Expenses expenses={expenses} />
    </div>
  )
}

export default App;