import React from 'react'
import './Admin.css'
import {Button} from "react-bootstrap";
import ProductList from "./ProductsList/ProductList";
import { Link } from "react-router-dom";


const Admin = (props) => {
    return (
        <div className="container">
            <div className="row justify-content-center" style={{marginTop: '40px', marginBottom: '40px'}}>
                <Link to='/admin/add'>
                    <Button className='call bg-success border-0 button'>Додати новий будинок</Button>
                </Link>
            </div>
            <ProductList state={props.state}/>
        </div>
    )
};

export default Admin
