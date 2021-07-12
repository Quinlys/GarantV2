import store from './redux/redux-store'
import ReactDOM from "react-dom";
import React from "react";
import AppContainer from "./AppContainer";
import {Provider} from "react-redux";

export let rerenderEntireTree = (store) => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <AppContainer store={store} dispatch={store.dispatch.bind(store)}/>
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
};

rerenderEntireTree(store);
