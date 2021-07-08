import React from 'react'
import CategorySort from "./CategorySort/CategorySort";
import ProductList from "./ProductsList/ProductList";
import * as axios from "axios"

const MainPage = (props) => {
    axios.get('http://34.118.102.195/posts').then(response => {
        debugger;
        console.log(response)
    });
    return (
        <div>
            <CategorySort/>

            <ProductList data={props.store.getState().userReducer.data}/>
        </div>
    )
};

export default MainPage