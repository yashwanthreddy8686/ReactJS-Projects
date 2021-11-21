import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";

function App() {
  const DUMMY_EXPENSES = [
    {
      id: "e1",
      title: "DoorDash",
      amount: 94.12,
      date: new Date(2021, 7, 14),
      category: "Dining",
    },
    {
      id: "e2",
      title: "Skip-The-Dishes",
      amount: 799.49,
      date: new Date(2021, 2, 12),
      category: "Dining",
    },
    {
      id: "e3",
      title: "Uber eats",
      amount: 294.67,
      date: new Date(2021, 2, 28),
      category: "Dining",
    },
    {
      id: "e4",
      title: "Door Dash",
      amount: 450,
      date: new Date(2021, 5, 12),
      category: "Dining",
    },
    {
      id: "e5",
      title: "Opus card Recharge",
      amount: 450,
      date: new Date(2021, 5, 12),
      category: "Transportation",
    },
  ];

  const [updatedExpenses, setExpenses] = useState(DUMMY_EXPENSES);

  const createNewExpense = newExpense => {
    setExpenses((prevState) => {
      return [...prevState,newExpense];
    })
    console.log(newExpense);
  }
  return (
    <React.Fragment>
      <NewExpenses onCreate={createNewExpense}/>
      <Expenses expenses={updatedExpenses} />
    </React.Fragment>
  );
}

export default App;
