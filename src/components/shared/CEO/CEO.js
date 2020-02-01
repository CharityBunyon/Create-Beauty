import React from 'react';
import './CEO.scss';

class CEO extends React.Component {
  render() {
    return (
      <div className="container-fluid d-flex ceoDiv">
        <div className="col text-center">
          <img className="ceoImg" src="https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/83909849_10220217453049565_8872782266028261376_o.jpg?_nc_cat=100&_nc_oc=AQnPusQIRWZVy6A7CWdN-uKMBekIzyfUiNnorgYb8fw6ktjXr3Lu5Uc8Rwrx3V2jKY2jVOhsU_4F5k4tL_bzRfto&_nc_ht=scontent-atl3-1.xx&oh=fcbe976902827bebd10d3de24d92a0d8&oe=5E917013" alt="" />
        </div>
        <div className="col mainStory">
          <h2 className="quoteTitle">Express Yourself</h2>
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
