import Header from './components/Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from "react";
import Footer from './components/Footer/Footer'
import MainPage from "./components/MainPage/MainPage";
import {BrowserRouter, Route} from "react-router-dom";
import ProductPage from "./components/ProductPage/ProductPage";
import Admin from "./components/Admin/Admin";
import SuccessPage from "./components/successPage/successPage";
import ErrorPage from "./components/errorPage/errorPage";
import AddContainer from "./components/Admin/Add/AddContainer";

function App(props) {
    let products = props.store.getState().userReducer.data
        .map(product => <Route path={'/house' + product.id}><ProductPage type={product.type} price={product.price} address={product.address} description={product.description} longDescription={product.longDescription} img={product.img}/></Route>);

    return (
      <BrowserRouter>
          <div className="App bg-light">
              <Header/>
              <Route exact path='/'>
                <MainPage store={props.store}/>
              </Route>
              {
                  products
              }
              <Route exact path='/admin'>
                  <Admin store={props.store}/>
              </Route>
              <Route path='/admin/add'>
                  <AddContainer store={props.store}/>
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
