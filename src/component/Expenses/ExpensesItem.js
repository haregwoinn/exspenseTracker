import React, {useState} from 'react';
import './ExpenseItem.css';
import ExpensesDate from './ExpensesDate';
import Card from '../UI/Card'

function ExpensesItem(props) {
  let [title,setTitle] =useState(props.title);
  const clickHandler = ()=>{
    setTitle('updated');
    console.log(title);
  };
  return (
    <Card className='expense-item'>
        <ExpensesDate date = {props.date}></ExpensesDate>
      <div className='expense-item__description'>
        <h1>{title}</h1>
      </div>
      <div className='expense-item__price'>${props.amount}</div>
      <button onClick={clickHandler} > change title </button>
    </Card>
  );
}

export default ExpensesItem;
