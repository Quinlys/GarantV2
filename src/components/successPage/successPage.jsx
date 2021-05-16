import React from 'react'
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
import successImg from '../../img/success.png'


const SuccessPage = () => {
    return (
        <div className='container'>
            <div className="row justify-content-center" style={{marginTop: '55px', marginBottom: '25px'}}>
                <img src={successImg} alt="" style={{width: '30%'}}/>
            </div>
            <div className="row text-center justify-content-center" style={{marginTop: '25px', marginBottom: '25px'}}>
                <h2>
                    Eкземпляр успішно загружений на вебсайт.
                </h2>
            </div>
            <div className="row" style={{marginTop: '25px', marginBottom: '55px'}}>
                <div className="col-12 text-center" style={{marginTop: '15px', marginBottom: '15px'}}>
                    <Link to={'./'}>
                        <Button className='bg-success border-0'>Повернутись на головну сторінку</Button>
                    </Link>
                </div>
                <div className="col-12 text-center" style={{marginTop: '15px', marginBottom: '15px'}}>
                    <Link to={'./admin'}>
                        <Button className='bg-success border-0'>Повернутись до панелі адміністратора</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default SuccessPage