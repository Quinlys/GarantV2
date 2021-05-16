import React from 'react'
import './Product.css'
import {NavLink} from 'react-router-dom'
import cancel from '../../../../img/cancel.png'



const Product = (props) => {
    let typeString;
    if (props.type === 1) {
        typeString = 'Продаж';
    } else if (props.type === 2) {
        typeString = 'Оренда';
    } else if (props.type === 3) {
        typeString = 'Обмін';
    }

    return (
            <div className="col-lg-4 col-md-6 product">
                <NavLink to={"/house" + props.id}>
                <div className="card">
                    <div className="figure">
                        <img className="card-img-top" src={props.img} alt="Card"/>
                    </div>
                    <div className="card-body">
                        <img className="img-icon" src={cancel} alt="sell"/>
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