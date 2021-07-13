import Header from './components/Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from "react";
import Footer from './components/Footer/Footer'
import MainPageContainer from "./components/MainPage/MainPageContainer";
import {BrowserRouter, Route} from "react-router-dom";
import ProductPage from "./components/ProductPage/ProductPage";
import Admin from "./components/Admin/Admin";
import SuccessPage from "./components/successPage/successPage";
import ErrorPage from "./components/errorPage/errorPage";
import AddContainer from "./components/Admin/Add/AddContainer";
import getUsers from "./api/api";
import LoginContainer from "./components/Admin/LoginContainer";

class App extends React.Component {


    constructor(props) {
        super(props);
        if (this.props.store.getState().userReducer.data.length === 0) {
            getUsers().then(response => {
                this.props.changeHousesList(response.data);
            });
        }
        console.log(this.props.store.getState().userReducer.data);


    }

    render() {
        console.log(this.props.store.getState().userReducer.data);
        let products = this.props.store.getState().userReducer.data
            .map(product => <Route path={'/house' + product._id}><ProductPage type={product.type} price={product.price} address={product.address} description={product.description} longDescription={product.longDescription} img={product.img}/></Route>);

        return (
            <BrowserRouter>
                <div className="App bg-light">
                    <Header/>
                    <Route exact path='/'>
                        <MainPageContainer store={this.props.store}/>
                    </Route>
                    {
                        products
                    }
                    <Route exact path='/admin'>
                        <Admin store={this.props.store}/>
                    </Route>
                    <Route path='/admin/add'>
                        <AddContainer/>
                    </Route>
                    <Route path='/successPage'>
                        <SuccessPage/>
                    </Route>
                    <Route path='/errorPage'>
                        <ErrorPage/>
                    </Route>
                    <Route path='/admin/login'>
                        <LoginContainer/>
                    </Route>
                    <Footer/>
                </div>

            </BrowserRouter>
        )
    }
}

export default App;
