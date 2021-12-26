import React from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {

  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 500.95,
      date: new Date(2020, 7, 14)
    },
    { id: 'e2', 
      title: 'New TV', 
      amount: 28000, 
      date: new Date(2021, 2, 12) 
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 2500,
      date: new Date(2021, 2, 28)
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 4000,
      date: new Date(2021, 5, 12)
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log("inside App js!");
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}/>
    </div>
    
  );

}

export default App;