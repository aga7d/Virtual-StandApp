import React from "react";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./redux/reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default ({ children }) => {
  return (
    <Provider
      store={createStore(reducers, composeEnhancers(applyMiddleware(thunk)))}
    >
      {children}
    </Provider>
  );
};
