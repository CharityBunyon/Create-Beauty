import React from 'react';
import './CEO.scss';
import me from '../../../Images/ceo.jpg';

class CEO extends React.Component {
  // I made a CEO component when I'm rendering the domstring below
  // I exported this component to the Auth page where it's being displayed
  render() {
    return (
        <div className="row ceoDiv">
          <div className="col text-center">
            <img className="ceoImg" src= {me}/>
          </div>
          <div className="col mainStory text-center">
            <h2 className="quoteTitle">EXPRESS YOURSELF</h2>
            <div className="">
            <p className="quote">"Our mission is to help enhance your confidence. We are committed to encouraging men and women to feel both empowered & beautiful. Create Beauty is a direct reflection of my passion for great products that enhance the beauty in everyone."</p>
            </div>
            <blockquote className="streetCred"><strong>"</strong>CHARITY BUNYON - CEO & FOUNDER<strong>"</strong></blockquote>
          </div>
      </div>
    );
  }
}

export default CEO;
