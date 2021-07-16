import React from 'react'
import Product from "./Product/Product";
import './ProductList.css'



const ProductList = (props) => {

    let cards = [];
    if (props.data !== undefined) {
        for (let i = props.data.length - 1; i >= 0; i--) {
            cards.push(<Product img={props.data[i].img[0]} id={props.data[i]._id} price={props.data[i].price} type={props.data[i].typeSell} description={props.data[i].description} address={props.data[i].address}/>)
        }

    }




    return (
        <div className="container cards bg-light">
            <div className="card-group">
                { cards }
            </div>
        </div>
    )
};

export default ProductList