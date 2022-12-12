import "./App.css";
import Expensess from "./component/Expenses/Expenses";
import NewExpense from "./component/NewExpense/NewExpense";
import React,{useState} from "react";

const DEMMY_EXSPENSE = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App(props) {
  const [expenses, setExpenses] = useState(DEMMY_EXSPENSE);

  const AddExspense = (expense) => {
    setExpenses((prevExspense) => {
      return [expense, ...prevExspense];
    });
  };
  return (
    <div>
      <NewExpense onAddExspense={AddExspense} />
      <Expensess items={expenses}></Expensess>
    </div>
  );
}

export default App;
