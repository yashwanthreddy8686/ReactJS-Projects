import classes from "./FilterableProductTable.module.css";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

const FilterableProductTable = (props) => {
  return (
    <div className={classes.container}>
      <SearchBar />
      <ProductTable items={props.products}/>
    </div>
  );
};

export default FilterableProductTable;
