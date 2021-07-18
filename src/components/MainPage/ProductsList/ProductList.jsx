import React from 'react'
import Product from "./Product/Product";
import './ProductList.css'
import {useSelector} from "react-redux";



const ProductList = (props) => {


    let cardsData = props.data;
    let cards = [];
    let sortList = props.sortList;


    const generateCards = (cardsData) => {
        let cards = [];
        for (let i = cardsData.length - 1; i >= 0; i--) {
            cards.push(<Product img={cardsData[i].img[0]} id={cardsData[i]._id} price={cardsData[i].price} type={cardsData[i].typeSell} description={cardsData[i].description} address={cardsData[i].address}/>)
        }
        return cards;
    };

    useSelector(() => {
        if (props.data !== undefined) {
            if (sortList.apartments || sortList.cottage || sortList.houses || sortList.garages || sortList.land || sortList.commercial || sortList.oneRoom || sortList.twoRooms || sortList.threeRooms || sortList.fourPlusRooms || sortList.rent || sortList.selling || sortList.exchange) {
                if (props.sortList.apartments === false) {
                    for (let i = 0; i < cardsData.length; i++) {
                        if (cardsData[i].apartments === false) {
                            cardsData = cardsData.delete[i]
                        }
                    }
                }

                cards = generateCards(cardsData);
            } else {
                cards = generateCards(cardsData);
            }
        }
    });







    return (
        <div className="container cards bg-light">
            <div className="card-group">
                { cards }
            </div>
        </div>
    )
};

export default ProductList