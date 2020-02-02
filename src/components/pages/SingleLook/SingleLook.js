import React from 'react';
import { Link } from 'react-router-dom';
import lookData from '../../../helpers/data/lookData';
import './SingleLook.scss';

class SingleLook extends React.Component {
  state = {
    look: {},
  };

  componentDidMount() {
    const { lookId } = this.props.match.params;
    lookData
      .getSingleLook(lookId)
      .then((response) => {
        this.setState({ look: response.data });
      })
      .catch((err) => console.error('error from get singleLooks', err));
  }

  // I created a look object in state that will display an individual look when a user clicks to view a look
  // I imported lookData and Link
  // In the domstring I created a close button that when clicked will reroute back to the homepage. Also I am passing down the state of the object to be used to display the contents of the singleLook
  // I used the componentDidMount method to find the exact lookId and then pass that lookId to the the getSingleLook function.
  // I then set the state of the look to the response I received back

  render() {
    const { look } = this.state;

    return (
      <div className="container-fluid singleLookView">
        <div className="singleLookBtns text-center">
          <Link className="btn btn-outline-dark btn-lg createBtn" to="/">
            CLOSE
          </Link>
        </div>

        <div className="d-flex singleLookImgDiv">
          <div className="text-center col">
            <img className="card-img-top lookImg" src={look.imgUrl} alt="" />
            <div>
              <p className="beatRating">Beat Rating: {look.rating}</p>
            </div>
          </div>

          <div className="col singleLookDeets">
            <div className="lookSteps">
              <p className="rouProTitle">The Routine:</p>
              <p className="rouProPara">{look.steps}</p>
            </div>
          </div>

          <div className="col singleLookDeets">
            <div className="lookSteps">
              <p className="rouProTitle">The Products:</p>
              <p className="rouProPara">{look.products}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleLook;
