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
        <div className="d-flex justify-content-center">
          <h1 className="slogan">YOUR BEAUTY</h1>
          <h1 className="slogan">YOUR CREATION</h1>
          <h1 className="slogan">YOUR POWER</h1>
        </div>
        <div className="d-flex models">
          <div>
            <img
              className="brand"
              src="https://i.pinimg.com/originals/6c/69/32/6c6932602a863b741cff243d6f41ebbd.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="brand"
              src="https://masterbeautyphotography.com/wp-content/uploads/2016/06/Bridget_0156-web.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="brand"
              src="https://i.pinimg.com/originals/19/69/62/196962757057a846e24826333ad94baa.jpg"
              alt=""
            />
          </div>
        </div>
        <CEO/>
        <div className="">
          <h2 className="creatorTitle">Meet Our Creators</h2>
          <p className="creatorBuyIn">
            Upload your new look and tag @createbeauty - let us show you off!
          </p>
        </div>
        <div className="container-fluid d-flex flex-wrap creatorsDiv">
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
