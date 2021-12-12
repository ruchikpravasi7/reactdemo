import "./ExpenseDate.css";
function ExpenseDate(data) {
  const month = data.date.toLocaleString("en-US", { month: "long" });
  const date = data.date.toLocaleString("en-US", { day: "2-digit" });
  const year = data.date.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__month">{date}</div>
      <div className="expense-date__day">{month}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
}
export default ExpenseDate;
