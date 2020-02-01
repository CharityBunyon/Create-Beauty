import React from 'react';
import './Auth.scss';

import firebase from 'firebase/app';
import 'firebase/auth';
import CEO from '../../shared/CEO/CEO';
import collageData from '../../../helpers/data/collageData';
import Collage from '../../shared/Collage/Collage';

class Auth extends React.Component {
  state = {
    creators: [],
  }

  componentDidMount() {
    this.getAllCreators();
  }

  getAllCreators = () => {
    collageData.getCreators()
      .then((creators) => this.setState({ creators }))
      .catch((err) => console.error('error from get creators', err));
  }

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
              <button className="btn btn-danger mainCustomBTN" data-target="modal-signup">Sign Up</button>
              <button className="btn btn-danger mainCustomBTN" onClick={ this.loginClickEvent}>Login</button>
            </div>
        </nav>
        <CEO />
        <div>
          <h2 className="creatorTitle">Meet Our Creators</h2>
          <p>Upload your new look and tag @createbeauty - let us show you off!</p>
        </div>
        <div className=" container-fluid d-flex flex-wrap col">
          {this.state.creators.map((creator) => <Collage key={creator.id} creator={creator} />)}
        </div>
      </div>

    );
  }
}

export default Auth;
