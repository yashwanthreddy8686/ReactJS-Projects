import classes from './SearchBar.module.css';

const SearchBar = (props) => {

  const handleSearch = e =>{
    props.onChangeSearch(e.target.value);
  }
  const handleCheck = e =>{
    props.onChangeCheck(e.target.checked);
  }
  return (
    <div className={classes.searchBox}>
      <input type="search" value={props.filterText} onChange={handleSearch}/>
      <input type="checkbox" id="searchItems" checked={props.inStockOnly} onChange={handleCheck}/>
      <label>Only show products in stock</label>
    </div>
  );
};

export default SearchBar;
