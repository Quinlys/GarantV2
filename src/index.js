import store from './redux/redux-store'
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import {Provider} from "react-redux";

export let rerenderEntireTree = (store) => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App store={store} dispatch={store.dispatch.bind(store)}/>
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
};

rerenderEntireTree(store);
