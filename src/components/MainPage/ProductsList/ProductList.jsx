import React from 'react'
import Product from "./Product/Product";
import './ProductList.css'
import {useSelector} from "react-redux";



const ProductList = (props) => {


    let cardsData = props.data;
    let cards = [];
    for (let i = cardsData.length - 1; i >= 0; i--) {
        cards.push(<Product img={cardsData[i].img[0]} id={cardsData[i]._id} price={cardsData[i].price} type={cardsData[i].typeSell} description={cardsData[i].description} address={cardsData[i].address}/>)
    }

    useSelector(() => {
        if (props.readyData.length !== 0) {
            cards = [];
            cardsData = props.readyData;
            for (let i = cardsData.length - 1; i >= 0; i--) {
                cards.push(<Product img={cardsData[i].img[0]} id={cardsData[i]._id} price={cardsData[i].price} type={cardsData[i].typeSell} description={cardsData[i].description} address={cardsData[i].address}/>)
            }
        }
    });





    return (
        <div className="container cards bg-light">
            <div className="card-group">
                { props.readyData.empty ? 'Список пустий' : cards }
            </div>
        </div>
    )
};

export default ProductList