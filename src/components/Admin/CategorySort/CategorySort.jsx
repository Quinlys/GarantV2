import React from 'react'
import './CategorySort.css'

const CategorySort = (props) => {

    const changeSortList = () => {
        let sortList = props.sortList;
        sortList.apartments = document.getElementById('apartmentsControl').checked;
        sortList.cottage = document.getElementById('cottage').checked;
        sortList.houses = document.getElementById('house').checked;
        sortList.garages = document.getElementById('garage').checked;
        sortList.land = document.getElementById('field').checked;
        sortList.commercial = document.getElementById('commercial').checked;
        sortList.oneRoom = document.getElementById('oneRoom').checked;
        sortList.twoRooms = document.getElementById('twoRooms').checked;
        sortList.threeRooms = document.getElementById('threeRooms').checked;
        sortList.fourPlusRooms = document.getElementById('fourRooms').checked;
        sortList.rent = document.getElementById('rent').checked;
        sortList.selling = document.getElementById('sell').checked;
        sortList.exchange = document.getElementById('exchange').checked;
        
        
        if ( sortList.apartments || sortList.houses || sortList.cottage ) {
            document.getElementById('oneRoom').disabled = false;
            document.getElementById('twoRooms').disabled = false;
            document.getElementById('threeRooms').disabled = false;
            document.getElementById('fourRooms').disabled = false;
        }
        else {
            document.getElementById('oneRoom').disabled = true;
            document.getElementById('twoRooms').disabled = true;
            document.getElementById('threeRooms').disabled = true;
            document.getElementById('fourRooms').disabled = true;
        }

        props.changeSortList(sortList);
        props.changeReadyData(sortList, props.data);
    };




    return (
        <div className="footer-bs navbar-fixed-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 animated fadeInRight" style={{padding: '0'}}>
                        <div className="custom-control custom-checkbox apartments-control">
                            <input type="checkbox" className="custom-control-input" id="apartmentsControl" onChange={changeSortList}/>
                            <label className="custom-control-label" htmlFor="apartmentsControl">Квартири</label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="cottage" onChange={changeSortList}/>
                            <label className="custom-control-label" htmlFor="cottage">Дачі</label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="house" onChange={changeSortList}/>
                            <label className="custom-control-label" htmlFor="house">Будинки</label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="garage" onChange={changeSortList}/>
                            <label className="custom-control-label" htmlFor="garage">Гаражі</label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="field" onChange={changeSortList}/>
                            <label className="custom-control-label" htmlFor="field">Земля</label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="commercial" onChange={changeSortList}/>
                            <label className="custom-control-label" htmlFor="commercial">Комерційна нерухомість</label>
                        </div>
                    </div>
                    <div className="col-md-4 footer-ns footer-brand animated fadeInLeft">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="oneRoom" disabled={true} onChange={changeSortList}/>
                                <label className="custom-control-label" htmlFor="oneRoom">1 кімната</label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="twoRooms" disabled={true} onChange={changeSortList}/>
                                <label className="custom-control-label" htmlFor="twoRooms">2 кімнати</label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="threeRooms" disabled={true} onChange={changeSortList}/>
                                <label className="custom-control-label" htmlFor="threeRooms">3 кімнати</label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="fourRooms" disabled={true} onChange={changeSortList}/>
                                <label className="custom-control-label" htmlFor="fourRooms">4+ кімнати</label>
                        </div>
                    </div>
                    <div className="col-md-4 footer-ns animated fadeInRight">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="rent" onChange={changeSortList}/>
                            <label className="custom-control-label" htmlFor="rent">Оренда</label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="sell" onChange={changeSortList}/>
                            <label className="custom-control-label" htmlFor="sell">Продаж</label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="exchange" onChange={changeSortList}/>
                            <label className="custom-control-label" htmlFor="exchange">Обмін</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CategorySort