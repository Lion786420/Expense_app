import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [formState, formStateHandler] = useState(false);
  const setFormState = () => {
    formStateHandler(true);
  };
  const setCancelState = () => {
    formStateHandler(false);
  };

  const submissionHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.transferHandler(expenseData);
  };
  return (
    <div className="new-expense">
      {!formState && <button onClick={setFormState}>Add new Expense</button>}
      {formState && (
        <ExpenseForm
          onExpenseSubmission={submissionHandler}
          cancelControl={setCancelState}
        />
      )}
    </div>
  );
};

export default NewExpense;
