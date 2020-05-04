import { combineReducers } from "redux";
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
  createNavigationReducer
} from "react-navigation-redux-helpers";

import mainApp from "./mainApp";
import MainNavigation from "../navigations/MainNavigation";
const navReducer = createNavigationReducer(MainNavigation);

export default combineReducers({
  nav: navReducer,
  mainApp: mainApp
});
