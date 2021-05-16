import React from 'react'
import s from './Header.module.css'
import logo from '../../img/logo.png'
import viber from '../../img/viber.png'
import {NavLink} from 'react-router-dom'


const Header = () => {
    return (
        <nav className="navbar navbar-light bg-success">
            <div className="container align-middle">
                <NavLink className="navbar-brand text-light" to="/" style={{fontSize: '50px', marginTop: '-10px'}}>
                    <img src={logo} alt="" width="200" height="70" className="d-inline-block align-middle"/>
                </NavLink>
                <span className="navbar-text text-light" style={{lineHeight: 1.3}}>
                    <a className={s.mobileIcon} href="https://www.viber.com/ru/" style={{marginLeft: '-24px', marginRight: '5px'}}>
                        <img src={viber} alt="viber" width="20" height="20"/>
                    </a>
                    <div className={s.hidden}>
                        <a href="https://www.viber.com/ru/" style={{marginLeft: '-24px', marginRight: '5px'}}>
                            <img src={viber} alt="viber" width="20" height="20"/>
                        </a>
                        +380 66 78 26 312 <br/>
                        +380 68 10 43 588 <br/>
                    <div style={{marginLeft: '-18px'}}>Олександр Завируха</div>
                    </div>
                </span>
            </div>
        </nav>
    )
};

export default Header;