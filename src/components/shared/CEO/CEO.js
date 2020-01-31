import React from 'react';
import './CEO.scss';

class CEO extends React.Component {
  render() {
    return (
      <div className="container-fluid d-flex ceoDiv">
        <div className="col text-center">
          <img className="ceoImg" src="https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/11949433_10207257155850235_3094513880682883888_n.jpg?_nc_cat=105&_nc_oc=AQk5Gn1dfi76oGnvON5GFJqKTO9Z4DiPqMQEVAT4ZhUSv1G3IjftwcuvREKJFpY-u3XWIiW7WJsHBmGBL3tRTQ4-&_nc_ht=scontent-atl3-1.xx&oh=02216193f797b0dfbb5a924fad34e87a&oe=5ED4D8F0" alt="" />
        </div>
        <div className="col mainStory">
          <h2 className="quoteTitle">Express Yourself</h2>
          <div className="">
          <p className="quote container">"Our mission is to help enhance your confidence. We are committed to encouraging men and women to feel both empowered & beautiful. Create Beauty is a direct reflection of my passion for great products that enhance the beauty in everyone."</p>
          </div>
          <blockquote className="streetCred"><strong>"</strong>CHARITY BUNYON - CEO & FOUNDER<strong>"</strong></blockquote>
        </div>
      </div>
    );
  }
}

export default CEO;
