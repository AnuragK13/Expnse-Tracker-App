import { useState } from "react";
import "./Expenses.css";
import Card from "./Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const newDate = new Date().getFullYear().toString();

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState(newDate);

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        year={filteredYear}
        onChangeFilter={filterChangeHandler}
      ></ExpensesFilter>

      <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
      <ExpensesList items={filteredExpenses}></ExpensesList> 

      {/* {filteredExpenses.length == 0 && <p>No Expenses Found.</p>}

      {filteredExpenses.length > 0 && filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        ></ExpenseItem>
      ))} */}
      
    </Card>
  );
}
export default Expenses;
