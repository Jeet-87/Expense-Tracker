import React, { useState } from 'react';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = (props) => {

  const [selectedYear, setSelectedYear] = useState('2021');
 
  const filterdYear = (yearFilter) => {
    console.log(`Inside Expese.js Selected Year: ${yearFilter}`);
    setSelectedYear(yearFilter);
  };

    return (
        
      <div>
        
          <Card className="expenses">

            <ExpenseFilter selected={selectedYear} onFilterSelected={filterdYear} />

            {props.items.map((expense) => (
                <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />
            ))}

          </Card>

      </div>
      
     )
}

export default Expenses

