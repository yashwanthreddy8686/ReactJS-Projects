import ExpenseForm from './ExpenseForm';
import './NewExpenses.css'

const NewExpenses = props => {
    const onCreateExpenseHandler = newExpenses => {
        props.onCreate(newExpenses);
    }
    return <div className="new-expense">
        <ExpenseForm onCreate={onCreateExpenseHandler}/>
    </div>
}

export default NewExpenses;