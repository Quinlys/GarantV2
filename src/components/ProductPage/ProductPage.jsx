import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import './ProductPage.css'
import { Carousel, Button } from "react-bootstrap";
import sell from "../../img/sell.png";
import rent from "../../img/rent.png";
import exchange from "../../img/exchange.png";


const ProductPage = (props) => {

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

    let imgs = props.img.map( imgSrc => <Carousel.Item className="carouselItem">
        <img
            src={imgSrc}
            alt="HousePhoto"
            className="d-block w-100 carouselPhoto"

        />
    </Carousel.Item>);


    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-12">
                    <Carousel style={{margin: "40px 0"}}>
                        { imgs }
                    </Carousel>
                </div>
                <div className="col-lg-6 col-md-12">
                    <div className="info-block">
                        <img src={typeImg} alt="" style={{height: '60px', float: 'right', marginRight: '40px'}}/>
                        <h2 className="type"><b>{typeString}</b></h2>
                        <h2 className="price"><b>{props.price}</b></h2>
                        <p className='address'>{props.address}</p>
                        <Button className='call bg-success border-0 button'>Дзвінок рієлтору</Button>
                    </div>
                </div>
            </div>
            <div className="row" style={{marginBottom: '40px'}}>
                <div className="col-12">
                    <h4>Опис</h4>
                    <p className="description">
                        <span>
                            {props.description}
                        </span>
                        <span>
                            {props.longDescription}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    )
};

export default ProductPage;