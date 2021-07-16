import React from 'react'
import './Product.css'
import cancel from '../../../../img/cancel.png'
import Cookie from "js-cookie";
import * as axios from "axios";



const Product = (props) => {
    let typeString;
    if (props.type === 1) {
        typeString = 'Продаж';
    } else if (props.type === 2) {
        typeString = 'Оренда';
    } else if (props.type === 3) {
        typeString = 'Обмін';
    }

    const deleteHouse = () => {
        console.log(Cookie.get('id'));
        const headers = {
            'Authorization': "Bearer " + Cookie.get('id')
        };
        axios.delete('https://api.garantbd.pp.ua/posts/' + props.id, {

            headers: headers
        }).then (function (response) {
            document.location.replace('http://localhost:3000/admin');
            console.log(response)
        }).catch( function (error) {

            console.log(error)
        })
    };

    const redirect = () => {
        document.location.replace('http://localhost:3000/house' + props.id)
    };

    return (
            <div className="col-lg-4 col-md-6 product">

                <div className="card" style={{cursor: 'pointer'}}>
                    <div onClick={redirect}>
                    <div className="figure">
                        <img className="card-img-top" src={props.img} alt="Card"/>
                    </div>
                    </div>
                    <div className="card-body">
                        <img className="img-icon" src={cancel} alt="sell" onClick={deleteHouse} style={{cursor: 'pointer'}}/>
                        <div onClick={redirect}>
                        <h5 className="card-title">{typeString}</h5>
                        <p className="card-text description">{props.description}</p>
                        <p className="card-text font-weight-bold">{props.price} </p>
                        </div>
                    </div>
                    <div className="card-footer">
                        <small className="card-text">{props.address}</small>
                    </div>
                </div>
            </div>
    )
};

export default Product;