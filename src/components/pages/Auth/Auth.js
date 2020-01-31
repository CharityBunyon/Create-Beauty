import React from 'react';
import './Auth.scss';
import firebase from 'firebase/app';
import 'firebase/auth';

class Auth extends React.Component {
  loginClickEvent = (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }

  render() {
    return (
      <div className="Auth">
        <nav className="navbar navbar-expand-lg navbar-light mainCustomNav">
            <div className="container">
            <li className="nav-link mainTitle">CREATE BEAUTY</li>
            </div>
            <div className="justify-content-end container">
              <button className="btn btn-danger mainCustomBTN " onClick={ this.loginClickEvent}>Login</button>
            </div>
        </nav>
      </div>
    );
  }
}

export default Auth;
