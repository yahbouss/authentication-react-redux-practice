import {BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import './App.scss';
import Navbarr from './components/Navbar/Navbarr.component';
import Home from "./pages/Home.page"
import Login from './pages/Login.page';
import Profile from './pages/Profile.page';
import {connect} from 'react-redux'

function App({auth}) {
  return (
    <Router>
      <Navbarr auth={auth.isAuthenticated}/>
      <Switch>
        <Route exact path="/" ><Home/></Route>
        <PublicRoute exact path="/Login" auth={auth.isAuthenticated}><Login/></PublicRoute>
        <PrivateRoute path="/profile"><Profile/></PrivateRoute>
      </Switch>
    </Router>
  );
}

function PublicRoute({ children, auth, ...rest}) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        !auth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
} 

function PrivateRoute({ children, auth, ...rest}) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}


const mapStateToProps = (state) => ({
  auth: state.auth
});
export default connect(mapStateToProps)(App);
