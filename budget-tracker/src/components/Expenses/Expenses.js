import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card'

const Expenses = props =>{
    return <Card className="expenses">
        {props.expenses.map(expense => {
            return <ExpenseItem {...expense} key={expense.id}/>
        })}
    </Card>
}

export default Expenses;