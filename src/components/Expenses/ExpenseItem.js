import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import React, { useState } from 'react';
 

const ExpenseItem = (props) => {

  const [title, setTitle] = useState(props.title);
  console.log(title);

  const clickHandler = () => {
    setTitle('Updated!');
    console.log(title);
  }

    return (
      <Card className="expense-item">
        <ExpenseDate date={props.date}/>
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">Rs {props.amount}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
      </Card>
    );
}

export default ExpenseItem