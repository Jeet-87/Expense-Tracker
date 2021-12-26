import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [eneteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [eneterdDate, setEneteredDate] = useState('');

    // const[userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);

        // setUserInput({
        //     ...userInput, //Spread all the previous contents of form so that we dont loose the other two data we are not copying
        //     enteredTitle: event.target.value
        // });

        // setUserInput((prevState) => {                                   //Safer way when there is a previous state coz react passes the latest state
        //     return {...prevState, enteredTitle: event.target.value}; 
        // });
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // });

        // setUserInput((prevState) => {
        //     return {...prevState, enteredAmount: event.target.value};
        // });
    };

    const dateChangeHandler = (event) => {
        setEneteredDate(event.target.value);
        
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // });

        // setUserInput((prevState) => {
        //     return {...prevState, enteredDate: event.target.value};
        // });
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData= {
            title: eneteredTitle,
            amount: enteredAmount,
            date: new Date(eneterdDate)
        }

        // console.log(expenseData);

        props.onExpenseSaved(expenseData);

        setEnteredTitle('');
        setEneteredDate('');
        setEnteredAmount('');
    }


    return (
        <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type='text' value={eneteredTitle} onChange={titleChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type='number' min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type='date' min="2019-01-01" max="2022-12-31" value={eneterdDate} onChange={dateChangeHandler} />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type='submit'>Add Expense</button>
        </div>
        </form>
    )
}

export default ExpenseForm
