import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "../reduces";
import axios from "axios";
import axiosMiddleware from "redux-axios-middleware";
import { createReactNavigationReduxMiddleware } from "react-navigation-redux-helpers";

const client = axios.create({
  baseURL: "https://api.github.com",
  responseType: "json"
});

const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav
);

const store = createStore(
  reducers,
  applyMiddleware(thunk, axiosMiddleware(client), middleware)
);

export default store;
