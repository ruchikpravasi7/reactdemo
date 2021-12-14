import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, titleToChange] = useState("");
  const [amount, amountToChange] = useState("");
  const [date, dateToChange] = useState("");
  const titleChanged = (event) => {
    titleToChange(event.target.value);
  };
  const amountChanged = (event) => {
    amountToChange(event.target.value);
  };
  const dateChanged = (event) => {
    dateToChange(event.target.value);
  };
  const formSubmit = (event) => {
    event.preventDefault();
    const expense = {
      title: title,
      amount: amount,
      date: new Date(date),
    };
    props.onExpenseFormSubmit(expense);
  };
  return (
    <form onSubmit={formSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input onChange={titleChanged} type="text" />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            onChange={amountChanged}
            type="number"
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input onChange={dateChanged} type="date" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
