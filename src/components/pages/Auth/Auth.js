import React from 'react';
import './Auth.scss';

import firebase from 'firebase/app';
import 'firebase/auth';
import CEO from '../../shared/CEO/CEO';
import collageData from '../../../helpers/data/collageData';
import Collage from '../../shared/Collage/Collage';
import models from '../../../Images/models1.png';

class Auth extends React.Component {
  state = {
    creators: [],
  };

  componentDidMount() {
    this.getAllCreators();
  }

  getAllCreators = () => {
    collageData
      .getCreators()
      .then((creators) => this.setState({ creators }))
      .catch((err) => console.error('error from get creators', err));
  };

  loginClickEvent = (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  };

  // Create navbar that will contain the branc name and login button
  // Login button contains the event that activate the Google popup and will trigger the auth status in App.js
  // Added models to auth page
  // Added CEO component to Auth page
  // Added a creator state for my array of creators from my collageData file
  // Imported CollageData.js and Collage.js
  // I set the state of my creators array by creating a getAllCreators function that will call the getCreators function to grab all creators from firebase
  // Then I map over them and passing creator through
  // Passed down my Collage domstring that contains all creator info and assigns a unique key of "creator.id"

  render() {
    return (
      <div className="Auth">
        <nav className="navbar navbar-expand-lg navbar-light mainCustomNav">
          <div className="container">
            <li className="nav-link mainTitle">CREATE BEAUTY</li>
          </div>
          <div className="justify-content-end container">
            <button
              className="btn btn-outline-dark mainCustomBTN"
              id="loginBtn"
              onClick={this.loginClickEvent}>
              Login
            </button>
          </div>
        </nav>
        <div className="d-flex justify-content-around img-fluid flex-wrap">
          <p className="slogan">YOUR BEAUTY</p>
          <p className="slogan">YOUR CREATION</p>
          <p className="slogan">YOUR POWER</p>
        </div>
        <div className="text-center">
        <img className="img-fluid" src={models} alt="ceo charity bunyon"/>
        </div>
        <div className="container-fluid">
        <CEO/>
        </div>
        <div className="">
          <h2 className="creatorTitle">Meet Our Creators</h2>
          <p className="creatorBuyIn">
            Upload your new look and tag @createbeauty - let us show you off!
          </p>
        </div>
        <div className="creatorsDiv d-flex flex-wrap justify-content-around">
          {this.state.creators.map((creator) => (
            <Collage key={creator.id} creator={creator} />
          ))}
        </div>
        <br />
      </div>
    );
  }
}

export default Auth;
// container-fluid d-flex flex-wrap creatorsDiv
