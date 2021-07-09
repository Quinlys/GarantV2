import React from 'react'
import CategorySort from "./CategorySort/CategorySort";
import ProductList from "./ProductsList/ProductList";
import getUsers from '../../api/api'

const MainPage = (props) => {
    getUsers().then(response => {
        console.log(response.data);
    });

    return (
        <div>
            <CategorySort/>

            <ProductList data={props.store.getState().userReducer.data}/>
        </div>
    )
};

export default MainPage