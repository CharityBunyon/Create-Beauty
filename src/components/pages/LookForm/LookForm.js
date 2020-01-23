import React from 'react';
import authData from '../../../helpers/data/authData';
import lookData from '../../../helpers/data/lookData';
import Ratings from '../../shared/Ratings/Ratings';

import './LookForm.scss';

class LookForm extends React.Component {
  state ={
    lookRating: '',
    lookImgUrl: '',
    lookSteps: '',
    lookProducts: '',
    lookShare: '',
  }

  componentDidMount() {
    const { lookId } = this.props.match.params;
    if (lookId) {
      lookData.getSingleLook(lookId)
        .then((response) => {
          this.setState({
            lookRating: response.data.rating, lookImgUrl: response.data.imgUrl, lookSteps: response.data.steps, lookProducts: response.data.products, lookShare: response.data.share,
          });
        })
        .catch((err) => console.error('error from get singleLook, err'));
    }
  }

  ratingChange = (e) => {
    e.preventDefault();
    this.setState({ lookRating: e.target.value });
  }

  imgChange = (e) => {
    e.preventDefault();
    this.setState({ lookImgUrl: e.target.value });
  }

  stepsChange = (e) => {
    e.preventDefault();
    this.setState({ lookSteps: e.target.value });
  }

  productsChange = (e) => {
    e.preventDefault();
    this.setState({ lookProducts: e.target.value });
  }

  shareChange = (e) => {
    e.preventDefault();
    this.setState({ lookShare: e.target.value });
  }

  createLookEvent = (e) => {
    e.preventDefault();
    const newLook = {
      rating: this.state.lookRating,
      imgUrl: this.state.lookImgUrl,
      steps: this.state.lookSteps,
      products: this.state.lookProducts,
      share: this.state.lookProducts,
      uid: authData.getUid(),
    };
    lookData.saveLook(newLook)
      .then(() => this.props.history.push('/'))
      .catch((err) => console.error('error from createLook, err'));
  }


  render() {
    const {
      lookRating, lookImgUrl, lookSteps, lookProducts, lookShare,
    } = this.state;

    return (
    <form>
        <div className="form-group ratingArea">
          <p htmlFor="look-rating">The Rating</p>
          <select value={lookRating} onChange={this.ratingChange}>
            <option value="Au Natural">Au Natural</option>
            <option value="That Bitch">That Bitch</option>
            <option value="G.O.A.T">G.O.A.T</option>
            <option value="Classic">Classic</option>
            <option value="Snatched">Snatched</option>
            <option value="Yass Queen">Yass Queen</option>
          </select>
      </div>

      <br/>
      <div className="form-group col routineArea">
        <p htmlFor="look-steps" className="col-6">The Routine</p>
        <textarea
        className="form-control col-6"
        value={lookSteps}
        onChange= {this.stepsChange}
        placeholder="Enter Your Routine"
        id="look-steps"
        />
      </div>
      <br/>
      <div className="form-group routineArea">
        <p htmlFor="look-products col-6">The Products</p>
        <textarea
        className="form-control col-6"
        value={lookProducts}
        onChange= {this.productsChange}
        placeholder="Enter All Products"
        id="look-products"
        />
      </div>
      <br/>
      <div className="form-group">
          <p htmlFor="look-img">The Beat</p>
          <input
          type="text"
          className="form-control col-6"
          id="board-name"
          placeholder="Enter Img Url"
          value= { lookImgUrl }
          onChange={ this.imgChange }
          />
      </div>
      <br/>
      <div className="form-group shareArea">
          <p htmlFor="look-share">To Share or Not To Share</p>
          <select value={lookShare} onChange={this.shareChange}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
      </div>
      <button className="btn btn-danger saveBtn" onClick={this.createLookEvent}>Save Board</button>
    </form>
    );
  }
}

export default LookForm;
