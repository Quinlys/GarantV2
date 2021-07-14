import React from 'react'
import { Button, Form } from "react-bootstrap";
import {Link} from 'react-router-dom'


const Login = (props) => {

    const addCookieForLogin = () => {
        props.addCookieForLogin(document.getElementById('username').value, document.getElementById('password').value);
    };


    return (
        <div className='container justify-content-center'>

            <div className="row text-center justify-content-center" style={{marginTop: '25px', marginBottom: '25px'}}>
                <h4>
                    Для використання функціоналу адміністратора, Вам потрібно авторизуватись
                </h4>
            </div>
            <Form style={{width: '60%', marginRight: 'auto', marginLeft: 'auto', marginTop: '25px', marginBottom: '50px'}} className='justify-content-center'>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Логін</Form.Label>
                    <Form.Control type="email" placeholder="Введіть логін" id='username'/>
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control type="password" placeholder="Пароль" id='password'/>
                </Form.Group>

                <Button variant="primary" className='bg-success border-0' style={{width: '340px'}} onClick={addCookieForLogin}>
                    Вхід
                </Button>

                <div className="row" style={{ marginBottom: '55px'}}>
                    <div className="col-12" style={{marginTop: '15px', marginBottom: '15px'}}>
                        <Link to={'./'}>
                            <Button className='bg-success border-0' style={{width: '340px'}}>Повернутись на головну сторінку</Button>
                        </Link>
                    </div>
                    <div className="col-12" style={{marginBottom: '15px'}}>
                        <Link to={'./admin'}>
                            <Button className='bg-success border-0' style={{width: '340px'}}>Повернутись до панелі адміністратора</Button>
                        </Link>
                    </div>
                </div>

            </Form>
        </div>
    )
};

export default Login