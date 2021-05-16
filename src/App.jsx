import Header from './components/Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from "react";
import Footer from './components/Footer/Footer'
import MainPage from "./components/MainPage/MainPage";
import {BrowserRouter, Route} from "react-router-dom";
import ProductPage from "./components/ProductPage/ProductPage";
import Admin from "./components/Admin/Admin";
import Add from "./components/Admin/Add/Add";
import SuccessPage from "./components/successPage/successPage";
import ErrorPage from "./components/errorPage/errorPage";





function App(props) {
    let products = props.state.getState().userReducer.data
        .map(product => <Route path={'/house' + product.id}><ProductPage type={product.type} price={product.price} address={product.address} description={product.description} longDescription={product.longDescription} img={product.img}/></Route>);

    return (
      <BrowserRouter>
          <div className="App bg-light">
              <Header/>
              <Route exact path='/'>
                <MainPage state={props.state.getState().userReducer.data}/>
              </Route>
              {
                  products
              }
              <Route exact path='/admin'>
                  <Admin state={props.state.getState().userReducer.data}/>
              </Route>
              <Route path='/admin/add'>
                  <Add state={props.state.getState().adminReducer} dispatch={props.dispatch}/>
              </Route>
              <Route path='/successPage'>
                  <SuccessPage/>
              </Route>
              <Route path='/errorPage'>
                  <ErrorPage/>
              </Route>
              <Footer/>
          </div>
      </BrowserRouter>
  );
}

export default App;
