import React from 'react';
import { Link } from 'react-router-dom';
import lookData from '../../../helpers/data/lookData';
import stepData from '../../../helpers/data/stepData';
import './SingleLook.scss';
import Steps from '../../shared/Steps/Steps';


class SingleLook extends React.Component {
  state = {
    look: {},
    steps: [],
  }

  getSteps = (lookId) => {
    stepData.getStepsByLookId(lookId)
      .then((response) => {
        response.sort((a, b) => {
          if (a.orderNumber < b.orderNumber) {
            return -1;
          }
          if (a.orderNumber > b.orderNumber) {
            return 1;
          }
          return 0;
        });
        this.setState({ steps: response });
      })
      .catch((err) => console.error('error from getting steps', err));
  }

  componentDidMount() {
    const { lookId } = this.props.match.params;
    this.getSteps(lookId);
    lookData.getSingleLook(lookId)
      .then((response) => {
        this.setState({ look: response.data });
      })
      .catch((err) => console.error('error from get singleLooks', err));
  }

  render() {
    const { look } = this.state;
    // console.log(look);

    return (
      <div className="container singleLookView">
      <div className="singleLookBtns text-center">
      <button className="btn btn-outline-dark btn-lg loseLookBtn"><Link to="/">Close</Link></button>
      </div>

      <div className="row d-flex">
        <div className="col text-center">
          <img className="card-img-top lookImg" src={look.imgUrl} alt=""/>
            <div>
              <p className="beatRating">BEAT RATING: {look.rating}</p>
            </div>
        </div>

          <div className="col">
          <div className="lookSteps">
            <p className="rouProTitle">The Routine:</p>
            {this.state.steps.map((step) => <Steps key={step.id} step={step} />)}
          </div>

          <div>
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
