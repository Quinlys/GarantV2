import React from 'react'
import './CategorySort.css'

const CategorySort = () => {


    return (
        <div className="footer-bs navbar-fixed-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 animated fadeInRight">
                        <div className="custom-control custom-checkbox apartments-control">
                            <input type="checkbox" className="custom-control-input" id="apartmentsControl"/>
                            <label className="custom-control-label" htmlFor="apartmentsControl">Квартири</label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="cottage"/>
                            <label className="custom-control-label" htmlFor="cottage">Дачі</label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="house"/>
                            <label className="custom-control-label" htmlFor="house">Будинки</label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="garage"/>
                            <label className="custom-control-label" htmlFor="garage">Гаражі</label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="field"/>
                            <label className="custom-control-label" htmlFor="field">Земля</label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="commercial"/>
                            <label className="custom-control-label" htmlFor="commercial">Комерційна нерухомість</label>
                        </div>
                    </div>
                    <div className="col-md-4 footer-ns footer-brand animated fadeInLeft">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="oneRoom"/>
                                <label className="custom-control-label" htmlFor="oneRoom">1 кімната
                                    </label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="twoRooms"/>
                                <label className="custom-control-label" htmlFor="twoRooms">2 кімнати</label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="threeRooms"/>
                                <label className="custom-control-label" htmlFor="threeRooms">3 кімнати</label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="fourRooms"/>
                                <label className="custom-control-label" htmlFor="fourRooms">4+ кімнати</label>
                        </div>
                    </div>
                    <div className="col-md-4 footer-ns animated fadeInRight">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="rent"/>
                            <label className="custom-control-label" htmlFor="rent">Оренда</label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="sell"/>
                            <label className="custom-control-label" htmlFor="sell">Продаж</label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="exchange"/>
                            <label className="custom-control-label" htmlFor="exchange">Обмін</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CategorySort