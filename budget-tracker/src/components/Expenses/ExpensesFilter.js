import './ExpensesFilter.css'

const ExpenseFilter = (props) => {
    const dropdownChangeHandler = e =>{
      props.onChangeFilter(e.target.value);
    }
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by Category</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="Dining">Dining</option>
          <option value="Transportation">Transportation</option>
          <option value="Groceries">Groceries</option>
          <option value="Movie">Movie</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
