import React from 'react';
import collageShape from '../../../helpers/propz/collageShape';
import './Collage.scss';

class Collage extends React.Component {
  static propTypes = {
    creator: collageShape.collageShape,
  };

  // I imported collageShape
  // I passed now the creator as props
  // Used creator to retrieve the key values of my creator objects from firebase
  render() {
    const { creator } = this.props;

    return (
      <div className="container d-flex flex-wrap justify-content-center col-4">
        <a href={creator.social}>
          <div className="card creatorCard">
            <img src={creator.imgUrl} alt="" className="creatorImg" />
            <div className="overlay">
              <div className="creatorDeets">
                <p>Click to see</p>
                <p id="creatorName">@{creator.name}'s</p>
                <p>new look!</p>
              </div>
            </div>
          </div>
        </a>
      </div>
    );
  }
}

export default Collage;
