import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import 'firebase/auth';
import './Nav.scss';

class Nav extends React.Component {
  static propTypes ={
    authed: PropTypes.bool,
  }

  logMeOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  render() {
    const { authed } = this.props;
    const buildNavbar = () => {
      if (authed) {
        return (
          <nav className="navbar navbar-expand-lg navbar-light customNav ">
            <div className="container d-flex justify-content-center">
            <Link className="nav-link brandTitle" to="/">CREATE BEAUTY</Link>
            </div>
            <div className="">
            <button className="nav-link btn btn-danger customBTN" onClick={this.logMeOut}>Logout</button>
            </div>
        </nav>
        );
      }
      return (<ul className="navbar-nav ml-auto"></ul>);
    };


    return (
      <div className="MyNavbar">
          <div className="container justify-content-center">
          </div>
          <div className="">
            { buildNavbar() }
          </div>

      </div>
    );
  }
}

export default Nav;
