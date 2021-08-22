import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

import './Header.css';
import Logout from './Logout';
import { NavbarBrand } from 'react-bootstrap';


class Header extends React.Component {
  render() {
    return(
      // <Navbar  bg="dark" variant="dark">
      //   <Navbar.Brand>Digemon</Navbar.Brand>
      //   <Link to="/">Home</Link>
      //   <Link to="/favorite">Favorite</Link>
      //   <Link to="/profile">Profile</Link>
      //   {/* TODO: if the user is logged in, render the `LogoutButton` - if the user is logged out, render the `LoginButton` */}
      //     <Logout/>

      // </Navbar>

      
    <Navbar bg="dark">
      <NavbarBrand>Digimin App</NavbarBrand>
      <Link to='/'>Home</Link>
      <Link to='/favorite'>Fav</Link>
      <Link to='/profile'>Profile</Link>

      <Logout/>

    </Navbar>
    );
  }
}

export default Header;


