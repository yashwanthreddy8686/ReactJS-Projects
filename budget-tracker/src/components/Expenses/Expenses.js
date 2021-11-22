import './Expenses.css'
import Card from '../UI/Card'
import ExpensesList from './ExpensesList';
import ExpenseFilter from './ExpensesFilter';
import { useState } from 'react';
import ExpensesChart from './ExpensesChart';

const Expenses = props =>{
    const [filteredBy , setFilteredBy] = useState('Dining');
    const [filterByMonth, setFilterByMonth] = useState('Mar');

    const onChangeHandler = (category) => {
        setFilteredBy(category);
    }

    let filteredExpenses = props.expenses.filter(expense => expense.category === filteredBy);

    const filterByMonthHandler = (month) =>{
        setFilterByMonth(month);
    }

    if(filterByMonth){
        const month = ['Jan','Mar','Jun'].find(mth => mth === filterByMonth);
        filteredExpenses = props.expenses.filter(expense => expense.date.toLocaleString("en-us",{month:"short"}) === month);
    }



    return <Card className="expenses">
        <ExpensesChart expenses={filteredExpenses} onFilterMonth={filterByMonthHandler}/>
        <ExpenseFilter selected={filteredBy} onChangeFilter={onChangeHandler}/>
        <ExpensesList filteredExpenses={filteredExpenses}></ExpensesList>
    </Card>
}

export default Expenses;