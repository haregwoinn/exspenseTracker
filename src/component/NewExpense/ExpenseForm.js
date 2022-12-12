import React, { useState } from "react";
import ExpensesDate from "../Expenses/ExpensesDate";
import "../NewExpense/ExpenseForm.css";
const ExpenseForm = (props) => {
  const [enterdTitle, setEnterdTitle] = useState("");
  const [enterdAmount, setEnterdamount] = useState("");
  const [enterdDate, setEnterdDate] = useState("");

  const titleChangeEventHandler = (event) => {
    setEnterdTitle(event.target.value);
  };
  const amountChangeEventHandler = (event) => {
    setEnterdamount(event.target.value);
  };
  const dateChangeEventHandler = (event) => {
    setEnterdDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enterdTitle,
      amount: enterdAmount,
      date: new Date(enterdDate)
    };

    props.onSaveExpenseData(expenseData);
    setEnterdTitle("");
    setEnterdamount("");
    setEnterdDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enterdTitle}
            onChange={titleChangeEventHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            value={enterdAmount}
            onChange={amountChangeEventHandler}
            type="number"
            min="0.01"
            step="0.01"
          ></input>
        </div>
        <div>
          <label className="new-expense__control">Date</label>
          <input
            value={enterdDate}
            onChange={dateChangeEventHandler}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
          ></input>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Exspense </button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
