import React from 'react';
import './CEO.scss';

class CEO extends React.Component {
  render() {
    return (
      <div className="container-fluid d-flex ceoDiv">
        <div className="col text-center">
          <img className="ceoImg" src="https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/83702414_10220217795178118_2414406455173054464_o.jpg?_nc_cat=103&_nc_oc=AQnyah_k6BcZTG-t1bAG0NDHbg1gCoY_DqcPW31Zn4iMCCNGB5tWLFwgEmzxp1krHG5bmlurWyQ77DXuvfiT7DyV&_nc_ht=scontent-atl3-1.xx&oh=8495608c99e9818c94f8fcb6c9aeb53e&oe=5E91E771" alt="" />
        </div>
        <div className="col mainStory">
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
