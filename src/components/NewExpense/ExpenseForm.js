import { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");
    // const [userInput, setUserInput] = useState({                            using one state instead of multiple states
    //     enteredTitle: "",                                                   using one state instead of multiple states
    //     enteredAmount: "",                                                  using one state instead of multiple states
    //     enteredDate: ""                                                     using one state instead of multiple states
    // })

    function titleChangeHandler(event) {
        setEnteredTitle(event.target.value);
        // setUserInput((prevState) => {                                       using one state instead of multiple states
        //     return { ...prevState, enteredTitle: event.target.value };
        // });
    }
    function amountChangeHandler(event) {
        setEnteredAmount(event.target.value);
        // setUserInput((prevState) => {                                       using one state instead of multiple states
        //     return { ...prevState, enteredAmount: event.target.value };
        // });
    }
    function dateChangeHandler(event) {
        setEnteredDate(event.target.value);
        // setUserInput((prevState) => {                                       using one state instead of multiple states
        //     return { ...prevState, enteredDate: event.target.value };
        // });
    }

    function submitHandler(event) {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new_expense__controls">
                <div className="new-expense__control">
                    <label for="title">Title</label>
                    <input name="title" type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label for="amount">Amount</label>
                    <input name="amount" type="number" value={enteredAmount} min="0" step="1" onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label for="date">Date</label>
                    <input name="date" type="date" value={enteredDate} min="2020--01-01" max="2023-12-31" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new_expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;