import React from "react";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import { Router } from "react-router-dom";
import { LastLocationProvider } from "react-router-last-location";
import history from "./history";
import thunk from "redux-thunk";
import reducers from "./redux/reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default ({ children, initialState = {} }) => {
  return (
    <Provider
      store={createStore(
        reducers,
        initialState,
        composeEnhancers(applyMiddleware(thunk))
      )}
    >
      <Router history={history}>
        <LastLocationProvider>{children}</LastLocationProvider>
      </Router>
    </Provider>
  );
};
