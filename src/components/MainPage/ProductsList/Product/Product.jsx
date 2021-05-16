import React from 'react'
import './Product.css'
import sell from '../../../../img/sell.png'
import exchange from '../../../../img/exchange.png'
import rent from '../../../../img/rent.png'
import {NavLink} from 'react-router-dom'



const Product = (props) => {
    // let path = "/house" + props.id;
    let typeString, typeImg;
    if (props.type === 1) {
        typeString = 'Продаж';
        typeImg = sell;
    } else if (props.type === 2) {
        typeString = 'Оренда';
        typeImg = rent;

    } else if (props.type === 3) {
        typeString = 'Обмін';
        typeImg = exchange;

    }

    return (
            <div className="col-lg-4 col-md-6 product">
                <NavLink to={"/house" + props.id}>
                <div className="card">
                    <div className="figure">
                        <img className="card-img-top" src={props.img} alt="Card"/>
                    </div>
                    <div className="card-body">
                        <img className="img-icon" src={typeImg} alt="sell"/>
                        <h5 className="card-title">{typeString}</h5>
                        <p className="card-text description">{props.description}</p>
                        <p className="card-text font-weight-bold">{props.price} </p>
                    </div>
                    <div className="card-footer">
                        <small className="card-text">{props.address}</small>
                    </div>
                </div>
                </NavLink>
            </div>
    )
};

export default Product;