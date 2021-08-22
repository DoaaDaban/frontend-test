import React from 'react';
import Header from './Header';
// import IsLoadingAndError from './IsLoadingAndError';
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { withAuth0 } from '@auth0/auth0-react';
import Login from './components/Login';
import Profile from './components/Profile';
import MyFavoriteDigemon from './components/MyFavoriteDigemon';
import Home from './components/Home';


class App extends React.Component {

  render() {
    // console.log('app', this.props);
    return(
      <>

      <h1>Auth0</h1>
        <Router>
          {/* <IsLoadingAndError> */}
            <Header />
            <Switch>
              
              <Route exact path="/">
                {/* TODO: if the user is logged in, render the `Digimon` component, if they are not, render the `Login` component */}
                {this.props.auth0.isAuthenticated && <Home/>}
                {!this.props.auth0.isAuthenticated && <Login/>}           
              </Route>

              <Route exact path='/favorite'>
                {(this.props.auth0.isAuthenticated && <MyFavoriteDigemon/>)}

              </Route>

              <Route exact path='/profile'>
              {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
               {this.props.auth0.isAuthenticated && <Profile/>}
              </Route>

            </Switch>
            <Footer />
          {/* </IsLoadingAndError> */}
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
