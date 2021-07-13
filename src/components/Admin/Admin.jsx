import React from 'react'
import './Admin.css'
import {Button} from "react-bootstrap";
import ProductList from "./ProductsList/ProductList";
import { Link } from "react-router-dom";
import Cookies from 'js-cookie'


const Admin = (props) => {
    Cookies.set('test', 'test');
    return (
        <div className="container">
            <div className="row justify-content-center" style={{marginTop: '40px', marginBottom: '40px'}}>
                <Link to='/admin/add'>
                    <Button className='call bg-success border-0 button'>Додати новий будинок</Button>
                </Link>
            </div>
            <ProductList data={props.store.getState().userReducer.data}/>
        </div>
    )
};

export default Admin
