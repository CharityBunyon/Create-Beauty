import React from 'react';
import { Link } from 'react-router-dom';
import authData from '../../../helpers/data/authData';
import lookData from '../../../helpers/data/lookData';
import StepInput from '../../shared/StepInput/StepInput';
// import stepData from '../../../helpers/data/stepData';


import './LookForm.scss';

class LookForm extends React.Component {
  state ={
    lookRating: '',
    lookImgUrl: '',
    lookSteps: [],
    lookProducts: '',
    lookShare: '',
    steps: [],
  }

  componentDidMount() {
    // this.getSteps();
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

  // getSteps = () => {
  //   stepData.getSteps()
  //     .then((steps) => this.setState({ steps }))
  //     .catch((err) => console.error('error from get steps', err));
  // }


  handleRoutine = (e) => {
    const { name, value } = e.target;
    const { lookSteps } = { ...this.state };
    lookSteps[name] = value;
    this.setState({ lookSteps });
  }

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
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
    console.log(typeof Number(e.target.id.split('step-')[1]));
    e.preventDefault();
    const listOfSteps = this.state.lookSteps;
    const step = {
      lookId: '',
      description: e.target.value,
      orderNumber: Number(e.target.id.split('step-')[1]),
    };

    listOfSteps.push(step);

    this.setState({ lookSteps: listOfSteps });
  }

  productsChange = (e) => {
    e.preventDefault();
    this.setState({ lookProducts: e.target.value });
  }

  shareChange = (e) => {
    e.preventDefault();
    this.setState({ lookShare: e.target.value });
  }

  input = () => <StepInput/>;

  addInputEvent = (e) => {
    e.preventDefault();
    console.log('hello');
  }

  editLookEvent =(e) => {
    e.preventDefault();
    const { lookId } = this.props.match.params;
    const editLook = {
      rating: this.state.lookRating,
      imgUrl: this.state.lookImgUrl,
      steps: this.state.lookSteps,
      products: this.state.lookProducts,
      share: this.state.lookProducts,
      uid: authData.getUid(),
    };
    lookData.updateLook(lookId, editLook)
      .then(() => this.props.history.push('/'))
      .catch((err) => console.error('error from edit look', err));
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
      .then((look) => {
        console.log(look);
        this.props.history.push('/');
      })
      .catch((err) => console.error('error from createLook, err'));
  }


  render() {
    const {
      lookRating, lookImgUrl, lookProducts, lookShare, lookSteps,
    } = this.state;

    const { lookId } = this.props.match.params;

    // loopingOverSteps = () => {
    //   while ()
    // }

    return (
    <div className="container">
    <form className="mainForm">
      <div className="text-center">
      </div>
      <div className="form-group">
          <p htmlFor="look-img" className="titles">The Beat:</p>
          <input
          type="text"
          className="form-control textareaStyles"
          placeholder="Enter Img Url"
          value= { lookImgUrl }
          onChange={ this.imgChange }
          />
      </div>
      <br/>
      <div className="form-group">
        <input
          type="text"
          className="form-control textareaStyles"
          id="step-1"
          placeholder="Enter Step One"
          onBlur={ this.stepsChange }
        />
        <input
        type="text"
        className="form-control textareaStyles"
        id="step-2"
        placeholder="Enter Step Two"
        onBlur={ this.stepsChange }
        />
        </div>

      <br/>
      <div className="form-group productArea">
        <p htmlFor="look-products col-6" className="titles">The Products:</p>
        <textarea
        className="form-control textareaStyles"
        value={lookProducts}
        name='lookProducts'
        onChange= {this.productsChange}
        placeholder="Enter All Products"
        id="look-products"
        />
      </div>
      <br/>
      <div className="container d-flex selectOptionsDiv">
        <div className="form-group ratingArea col">
            <p htmlFor="look-rating" className="titles1">The Rating:</p>
            <div className="select">
              <select className="selectOptions1" value={lookRating} onChange={this.ratingChange}>
                <option value="Au Natural">Au Natural</option>
                <option value="That Bitch">That Bitch</option>
                <option value="G.O.A.T">G.O.A.T</option>
                <option value="Classic">Classic</option>
                <option value="Snatched">Snatched</option>
                <option value="Yass Queen">Yass Queen</option>
              </select>
            </div>
        </div>
        <div>
          <div className="form-group ratingArea col">
              <p htmlFor="look-share" className="titles">To Share or Not To Share?</p>
              <div className="select">
              <select className="selectOptions" value={lookShare} onChange={this.shareChange}>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              </div>
          </div>
        </div>
      </div>

      <div className="container d-flex justify-content-center formBtns">
        <div>
      {lookId
        ? <button className="btn btn-outline-dark btn-lg editBtn" onClick={this.editLookEvent}>Edit</button>
        : <button className="btn btn-outline-dark btn-lg saveBtn" onClick={this.createLookEvent}>Add</button>
      }
      </div>
      <div>
      <button className="btn btn-outline-dark btn-lg closeBtn"><Link className="closeTitle" to="/">Close</Link></button>
      </div>
      </div>
    </form>
    </div>
    );
  }
}

export default LookForm;
