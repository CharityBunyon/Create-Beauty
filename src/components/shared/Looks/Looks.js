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

  render() {
    const { look } = this.props;

    return (
    <div className="Look col-4">
      <div className="card lookCard">
        <div className="card-body text-center">
        <h5 className="card-title">{look.rating}</h5>
          <div className="text-center">
          <img className="lookImg" src={look.imgUrl} alt=""/>
          </div>
          <div className="col">
            <Link className="btn btn-outline-dark btn-lg lookBtn" to={`/look/${look.id}`}>View</Link>
            <Link className="btn btn-outline-dark btn-lg editBtn" to={`/look/${look.id}/edit`}>Edit</Link>
            <button className="btn btn-outline-dark btn-lg lookBtn" onClick={this.deleteLookEvent}>Delete</button>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Looks;
