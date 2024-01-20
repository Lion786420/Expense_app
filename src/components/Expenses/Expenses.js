import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./EnpenseFilter";
import ExpensesList from "./ExpensesList";
import { useState } from "react";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2019");
  const yearIndicator = (yearSelected) => {
    setFilteredYear(yearSelected);
  };
  const filteredExpense = props.items.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter yearSender={yearIndicator} selected={filteredYear} />
      <ExpensesChart expenses={filteredExpense} />
      <ExpensesList items={filteredExpense} />
    </Card>
  );
};

export default Expenses;
