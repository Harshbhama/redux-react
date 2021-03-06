// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
//
// ReactDOM.render(<App />, document.getElementById('root'));
//
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import { createStore } from "redux"

const reducer = (state, action) => {
      switch (action.type) {
        case "ADD":
          state = state + action.payload
          break;

        case "SUBSTRACT":
          state = state - action.payload
          break;

      }

      return state;
}


const store = createStore(reducer, 1)

store.subscribe(() => {
  console.log("Store updated!!", store.getState())
})

store.dispatch({
  type: "ADD",
  payload: 100
})

store.dispatch({
  type: "ADD",
  payload: 50
})

store.dispatch({
  type: "SUBSTRACT",
  payload: 10
})
