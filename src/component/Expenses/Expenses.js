import "./Expenses.css";
import Card from "../UI/Card";
import { useState } from "react";
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import ExspenseList from "./ExspenseList";
import ExspenseChart from "./ExspenseChart";

const Expensess = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");


const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
console.log(filteredYear);
  const filteredExpenses = props.items.filter(Expensess => {
    return Expensess.date.getFullYear().toString() === filteredYear;
  });

  
  return (
    <Card className="expenses">
      <h1 className="naminig">HAREGEWOIN</h1>
      <ExpensesFilter
        select={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExspenseChart Expens = {filteredExpenses} />
      <ExspenseList items={filteredExpenses} /> 
    </Card>
  );
};

export default Expensess;
