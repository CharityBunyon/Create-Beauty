import React from 'react';
// import PropTypes from 'prop-types';
import collageShape from '../../../helpers/propz/collageShape';
import './Collage.scss';

class Collage extends React.Component {
  static propTypes = {
    creator: collageShape.collageShape,
  }

  render() {
    const { creator } = this.props;

    return (
     <div className="container">
         <a href={creator.social}><div className="card creatorCard">
     <img src={creator.imgUrl} alt="" className="creatorImg"/>
       <div className="overlay">
          <div class="creatorDeets">
              <p>Check Out {creator.name}'s New Look!</p>
          </div>
       </div>
       </div></a>
     </div>
    );
  }
}

export default Collage;
