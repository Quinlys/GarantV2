import React from 'react'
import CategorySort from "./CategorySort/CategorySort";
import ProductList from "./ProductsList/ProductList";
import getUsers from '../../api/api'

const MainPageOld = (props) => {
    getUsers().then(response => {
        console.log(response.data);
    });

    return (
        <div>
            <CategorySort/>
            Lol
            <ProductList data={props.data}/>
        </div>
    )
};

export default MainPageOld