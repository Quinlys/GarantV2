import Login from "./Login";
import {connect} from "react-redux";
import Cookie from 'js-cookie'
import * as axios from 'axios'

const mapStateToProps = (state) => {
    return {
        state: state
    }
};

const mapStateToDispatch = () => {
    return {
        addCookieForLogin: (username, password) => {
            debugger;
            axios.post('https://api.garantbd.pp.ua/auth/login', {
                username: username,
                password: password
            })
                .then(function (response) {
                    debugger;
                    if (response.data.token !== undefined) {
                        Cookie.set('id', response.data.token);
                        document.location.replace('/admin');
                    } else {
                        document.location.replace('/errorAfterLogin');
                    }
                })
                .catch(function (error) {
                    debugger;
                    console.log(error);
                    document.location.replace('/errorAfterLogin');
                });

        }
    }
};

const LoginContainer = connect(mapStateToProps, mapStateToDispatch)(Login);

export default LoginContainer
