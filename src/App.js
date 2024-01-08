import { useState } from 'react';
import './App.css';
import Expenses from './components//Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const EXPENSES = [
  {
    title: "grocary",
    amount: 600,
    date: new Date(2021, 5, 20)
  },
  {
    title: "dinner",
    amount: 800,
    date: new Date(2022, 4, 14)
  },
  {
    title: "birthday party",
    amount: 1000,
    date: new Date(2022, 6, 13)
  },
];
function App() {
  const [expenses, setExpenses] = useState(EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    });
  }

  return (
    <div>
      <NewExpense addExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
