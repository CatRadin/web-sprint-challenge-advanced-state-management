import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from 'redux'
import "./index.css";
import App from "./App";
import { Provider } from 'react-redux'
import { reducer } from './reducers'
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const { worker } = require('./mocks/browser');
worker.start();

//Creating My Store Here -------------------------------------------------------
const store = createStore(reducer, applyMiddleware(thunk, logger))

const rootElement = document.getElementById("root");

ReactDOM.render(
    //Wrapping App and it's children with the Provider, passing in my store! ---------------------
    //So that Redux can hold my state. I added thunk and logger
    <Provider store={store}>
    <App />
    </Provider>, 
    rootElement
);

//Task List:
//1. Add in all necessary components and libary methods. ✔️
//2. Create a store that includes thunk and logger middleware support.✔️
//3. Wrap the App component in a react-redux Provider element.✔️