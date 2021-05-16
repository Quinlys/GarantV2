import React from 'react'
import { Button } from "react-bootstrap";
import {Link} from 'react-router-dom'
import error from '../../img/cancel.png'


const ErrorPage = () => {
    return (
        <div className='container'>
            <div className="row justify-content-center" style={{marginTop: '55px', marginBottom: '25px'}}>
                <img src={error} alt="" style={{width: '30%'}}/>
            </div>
            <div className="row text-center justify-content-center" style={{marginTop: '25px', marginBottom: '25px'}}>
                <h2>
                    Щось пішло не так. Перевірте чи всі поля були заповнені.
                </h2>
            </div>
            <div className="row" style={{marginTop: '25px', marginBottom: '55px'}}>
                <div className="col-12 text-center" style={{marginTop: '15px', marginBottom: '15px'}}>
                    <Link to={'./'}>
                        <Button className='bg-danger border-0'>Повернутись на головну сторінку</Button>
                    </Link>
                </div>
                <div className="col-12 text-center" style={{marginTop: '15px', marginBottom: '15px'}}>
                    <Link to={'./admin'}>
                        <Button className='bg-danger border-0'>Повернутись до панелі адміністратора</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default ErrorPage