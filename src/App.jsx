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

function App(props) {
    let products = props.store.getState().userReducer.data
        .map(product => <Route path={'/house' + product.id}><ProductPage type={product.type} price={product.price} address={product.address} description={product.description} longDescription={product.longDescription} img={product.img}/></Route>);

    console.log(products);
    return (
      <BrowserRouter>
          <div className="App bg-light">
              <Header/>
              <Route exact path='/'>
                <MainPageContainer store={props.store}/>
              </Route>
              {
                  products
              }
              <Route exact path='/admin'>
                  <Admin store={props.store}/>
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
              <Footer/>
          </div>

      </BrowserRouter>
  );
}

export default App;
