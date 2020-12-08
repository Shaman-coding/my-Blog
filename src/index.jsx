import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import store from "./components/store/Store";

let RenderAll = (State) => {
    ReactDOM.render(

        <BrowserRouter>
            <App State={State}
                 dispatch={store.dispatch.bind(store)}
                 Store = {store}
                 />
        </BrowserRouter>,document.getElementById('root')



    )
};

RenderAll(store.getState());

store.subscribe(() => {
    let State = store.getState()
    RenderAll(State);
});


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
