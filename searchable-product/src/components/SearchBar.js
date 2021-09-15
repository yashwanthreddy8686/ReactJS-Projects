import classes from './SearchBar.module.css';

const SearchBar = (props) => {
  return (
    <div className={classes.searchBox}>
      <input type="search" />
      <input type="checkbox" id="searchItems" />
      <label>Only show products in stock</label>
    </div>
  );
};

export default SearchBar;
