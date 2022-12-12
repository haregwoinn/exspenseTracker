import "./ExspenseList.css";
import ExpensesItem from "./ExpensesItem";
import Card from "../UI/Card";
const ExspenseList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback"> Exspense not found </h2>;
  }
  return (
    <ul className="expenses-list">
        <Card>
      {props.items.map((Expensess) => (
      <ExpensesItem
        key={Expensess.id}
        date={Expensess.date}
        title={Expensess.title}
        amount={Expensess.amount}
      />
      ))}
        </Card>
    </ul>
  );
};

export default ExspenseList;
