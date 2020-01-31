import React from 'react';
import './Auth.scss';

import firebase from 'firebase/app';
import 'firebase/auth';
import CEO from '../../shared/CEO/CEO';

class Auth extends React.Component {
  loginClickEvent = (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }

  modal = <div id="modal-signup" class="modal">
      <div class="modal-content">
        <h4>Sign Up</h4><br/>
        <form id="signup-form">
          <div class="input-field">
            <input type="email" id="signup-email" required />
            <label for="signup-email">Email address</label>
          </div>
          <div class="input-field">
            <input type="password" id="signup-password" required />
            <label for="signup-password">Choose password</label>
          </div>
          <button class="btn btn-outline-dark">Sign Up</button>
        </form>
      </div>
    </div>
  // SIGN UP

 signupForm = document.querySelector('#signup-form');

 //  signupForm.addEventListener('submit', (e) => {
 //    e.preventDefault();
 //  })


 render() {
   return (
      <div className="Auth">
        <nav className="navbar navbar-expand-lg navbar-light mainCustomNav">
            <div className="container">
            <li className="nav-link mainTitle">CREATE BEAUTY</li>
            </div>
            <div className="justify-content-end container">
              <button className="btn btn-danger mainCustomBTN" data-target="modal-signup">Sign Up</button>
              <button className="btn btn-danger mainCustomBTN" onClick={ this.loginClickEvent}>Login</button>
            </div>
        </nav>
        <CEO />
      </div>

   );
 }
}

export default Auth;
