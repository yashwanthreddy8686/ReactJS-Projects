import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };
  const amountHandler = (e) => {
    setAmount(e.target.value);
  };
  const categoryHandler = (e) => {
    setCategory(e.target.value);
  };
  const dateHandler = (e) => {
    setDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseItem = {
      title: title,
      id: Math.random(),
      category: category,
      amount: +amount,
      date: new Date(date),
    };
    props.onCreate(expenseItem);
    setTitle("");
    setCategory("");
    setDate("");
    setAmount("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={titleHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={amount}
            min="0.01"
            step="0.01"
            onChange={amountHandler}
          />
          <div>
            <label>Category</label>
            <input type="text" value={category} onChange={categoryHandler} />
          </div>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={date}
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
