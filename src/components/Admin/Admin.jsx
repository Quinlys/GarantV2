import React from 'react'
import './Admin.css'
import {Button} from "react-bootstrap";
import ProductList from "./ProductsList/ProductList";
import { Link } from "react-router-dom";
import Cookies from 'js-cookie'
import CategorySortContainer from "./CategorySort/CategorySortContainer";


const Admin = (props) => {
    if (Cookies.get('id') === undefined) {
        document.location.replace('/admin/login');
    }


    return (
        <>
            <CategorySortContainer/>
            <div className="container">
                <div className="row justify-content-center" style={{marginTop: '40px', marginBottom: '40px'}}>
                    <Link to='/admin/add'>
                        <Button className='call bg-success border-0 button'>Додати новий будинок</Button>
                    </Link>
                </div>
                <ProductList data={props.store.getState().userReducer.data} sortList={props.store.getState().userReducer.sortList} readyData={props.store.getState().userReducer.readyData}/>
            </div>
        </>
    )
};

export default Admin
