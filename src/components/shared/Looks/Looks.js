import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import lookShape from '../../../helpers/propz/lookShape';
import './Looks.scss';


class Looks extends React.Component {
  static propTypes = {
    look: lookShape.lookShape,
    deleteLook: PropTypes.func,
  }

  deleteLookEvent = (e) => {
    e.preventDefault();
    const { deleteLook, look } = this.props;
    deleteLook(look.id);
  }

  // I imported Link, Proptypes, and lookshape
  // I declared my static propTypes of lookShape and my deleteLook function
  // I'm rendered the look card below that has view button that will allow route users to view an individual look. I have an edit button that will allow a user to edit that will route users to the look form. I have a delete button with an event listener that will call the deleteLookEvent function

  render() {
    const { look } = this.props;

    return (
    <div className="Look col justify-content-center">
      <div className="card lookCard">
        <div className="card-body text-center">
        <h5 className="card-title">{look.rating}</h5>
          <div className="text-center">
          <img className="lookImg" src={look.imgUrl} alt=""/>
          </div>
          <div className="col">
            <Link className="btn btn-outline-dark btn-lg lookBtn" to={`/look/${look.id}`}>VIEW</Link>
            <Link className="btn btn-outline-dark btn-lg editBtn" to={`/look/${look.id}/edit`}>EDIT</Link>
            <button className="btn btn-outline-dark btn-lg lookBtn" onClick={this.deleteLookEvent}>DELETE</button>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Looks;
