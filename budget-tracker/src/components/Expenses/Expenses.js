import './Expenses.css'
import Card from '../UI/Card'
import ExpensesList from './ExpensesList';
import ExpenseFilter from './ExpensesFilter';
import { useState } from 'react';

const Expenses = props =>{
    const [filteredBy , setFilteredBy] = useState('Dining');

    const onChangeHandler = (category) => {
        setFilteredBy(category);
    }

    const filteredExpenses = props.expenses.filter(expense => expense.category === filteredBy);
    console.log(filteredExpenses);

    return <Card className="expenses">
        <ExpenseFilter selected={filteredBy} onChangeFilter={onChangeHandler}/>
        <ExpensesList filteredExpenses={filteredExpenses}></ExpensesList>
    </Card>
}

export default Expenses;