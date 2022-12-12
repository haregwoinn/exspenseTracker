import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props)=>{
    const ExspenseHandler = (enteredExpenseData) =>{    

        const expenseData ={
            ...enteredExpenseData,
            id:Math.random().toString()
        };
       
         props.onAddExspense(expenseData);

    };

    return <div className="new-expense">
        <ExpenseForm onSaveExpenseData={ExspenseHandler} ></ExpenseForm>
    </div>
};

export default NewExpense;