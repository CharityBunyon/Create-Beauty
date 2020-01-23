import React from 'react';
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
            <button className="btn btn-outline-dark btn-lg lookBtn">View</button>
            <button className="btn btn-outline-dark btn-lg lookBtn" onClick={this.deleteLookEvent}>Delete</button>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Looks;
