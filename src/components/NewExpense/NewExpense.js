import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const formSubmit = (formData) => {
    const expense = {
      ...formData,
      id: parseInt(Math.random() * 100),
    };
    props.newExpenseData(expense);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onExpenseFormSubmit={formSubmit}></ExpenseForm>
    </div>
  );
};

export default NewExpense;
