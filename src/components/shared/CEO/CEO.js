import React from 'react';
import './CEO.scss';

class CEO extends React.Component {
  // I made a CEO component when I'm rendering the domstring below
  // I exported this component to the Auth page where it's being displayed
  render() {
    return (
        <div className="row ceoDiv">
          <div className="col text-center">
            <img className="ceoImg" src="https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/p720x720/83909849_10220217453049565_8872782266028261376_o.jpg?_nc_cat=100&_nc_oc=AQmIO8FkxehjA6tdQWueWJtcPBNCs4HuFTPdk4OQjg6PDJH4unDdMR4KG69OqjW1gJc&_nc_ht=scontent-ort2-2.xx&_nc_tp=6&oh=2a5b79bba6524804262d36f459aa9e69&oe=5EBFEBB9" alt="" />
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
