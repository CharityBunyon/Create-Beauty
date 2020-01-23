import React from 'react';
import './Ratings.scss';
import authData from '../../../helpers/data/authData';
import ratingData from '../../../helpers/data/ratingData';
import ratingShape from '../../../helpers/propz/ratingShape';

class Ratings extends React.Component {
  static propTypes = {
    rating: ratingShape.ratingShape,
  }

  state = {
    ratings: [],
  }

  componentDidMount() {
    this.Ratings();
  }

  getRatings = () => {
    ratingData.getRatingsById(authData.getUid())
      .then((ratings) => this.setState({ ratings }))
      .catch((err) => console.error('error from get rating', err));
  }

  render() {
    return (
        <div className="looks d-flex flex-wrap">
          {this.state.looks.map((rating) => <Ratings key={rating.id} rating={rating}/>)}
        </div>
    );
  }
}

export default Ratings;
