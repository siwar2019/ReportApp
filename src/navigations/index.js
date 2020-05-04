import MainNavigation from "./MainNavigation";
import { connect } from "react-redux";
import {
  reduxifyNavigator
} from "react-navigation-redux-helpers";

const App = reduxifyNavigator(MainNavigation, "root");
const mapStateToProps = state => ({
  state: state.nav
});

const AppWithNavigationState = connect(mapStateToProps)(App);
export default AppWithNavigationState;
