import React from 'react'
import CategorySort from "./CategorySort/CategorySort";
import ProductList from "./ProductsList/ProductList";

const MainPage = (props) => {
    return (
        <div>
            <CategorySort/>
            <ProductList state={props.state}/>
        </div>
    )
};

export default MainPage