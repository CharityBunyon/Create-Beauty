import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import 'firebase/auth';
import './Nav.scss';

class Nav extends React.Component {
  static propTypes = {
    authed: PropTypes.bool,
  };

  logMeOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  };

  // Imported Link, Proptypes, firebase, and firebase auth
  // Declared my auth proptypes and a boolean value
  // I created a logMeOut function that will call the check to see if someone is auth and click my logout button below. If they did then it will apply the call the signOut function which will sign out a user
  // I'm also retrieving userData so I pass down the userObj and authed as props
  // Within render I create a function called buildNavbar that will container the brand name, users name, users google profile image, and logout button is authed. If not then it will just render a navbar with the brand name
  render() {
    const { authed, userObj } = this.props;

    const buildNavbar = () => {
      if (authed) {
        return (
          <nav className="navbar navbar-expand-lg navbar-light customNav ">
            <div className="container">
              <p><Link className="nav-link brandTitle" to="/">
                CREATE BEAUTY
              </Link></p>
            </div>
            <div className="justify-content-end container profileDiv">
              <h3 className="userName">Welcome, {userObj.displayName}</h3>
              <img className="profileImg" src={userObj.photoURL} alt="" />
              <div className="">
                <button
                  className="nav-link btn btn-danger customBTN" id="logoutBtn"
                  onClick={this.logMeOut}>
                  Logout
                </button>
              </div>
            </div>
          </nav>
        );
      }
      return <ul className="navbar-nav ml-auto"></ul>;
    };

    return (
      <div className="MyNavbar">
        <div className="container justify-content-center"></div>
        <div className="">{buildNavbar()}</div>
      </div>
    );
  }
}

export default Nav;
