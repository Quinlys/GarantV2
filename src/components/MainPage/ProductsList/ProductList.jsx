import React from 'react'
import Product from "./Product/Product";
import './ProductList.css'


const ProductList = (props) => {



    let cards = props.data
        .map( card => <Product img={card.img[0]} id={card.id} price={card.price} type={card.type} description={card.description} address={card.address}/>
    );



    return (
        <div className="container cards bg-light">
            <div className="card-group">
                { cards }
            </div>
        </div>
    )
};

export default ProductList