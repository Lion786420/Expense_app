import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const submissionHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.transferHandler(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onExpenseSubmission={submissionHandler} />
    </div>
  );
};

export default NewExpense;
