import { useState } from "react";
import classes from "./FilterableProductTable.module.css";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

const FilterableProductTable = (props) => {

    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);

    const handleSearchInput = (userInput) =>{
      setFilterText(userInput);
    }

    const handleStockChange = checked => {
      setInStockOnly(checked);
    }

  return (
    <div className={classes.container}>
      <SearchBar filterText={filterText} inStockOnly={inStockOnly} onChangeSearch={handleSearchInput} onChangeCheck={handleStockChange}/>
      <ProductTable items={props.products} filterText={filterText} inStockOnly={inStockOnly}/>
    </div>
  );
};

export default FilterableProductTable;
