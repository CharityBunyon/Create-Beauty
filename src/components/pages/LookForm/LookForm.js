import React from 'react';
import { Link } from 'react-router-dom';
import FileUploader from 'react-firebase-file-uploader';
import firebase from 'firebase';
import authData from '../../../helpers/data/authData';
import lookData from '../../../helpers/data/lookData';
import config from '../../../helpers/data/imageData';
import './LookForm.scss';


firebase.initializeApp(config);
class LookForm extends React.Component {
  state ={
    lookRating: '',
    lookImgUrl: '',
    lookSteps: '',
    lookProducts: '',
    lookShare: '',
    image: '',
    imageUrl: '',
  }

  componentDidMount() {
    const { lookId } = this.props.match.params;
    if (lookId) {
      lookData.getSingleLook(lookId)
        .then((response) => {
          this.setState({
            lookRating: response.data.rating, imageUrl: response.data.imgUrl, lookSteps: response.data.steps, lookProducts: response.data.products, lookShare: response.data.share, selectedFile: response.data,
          });
        })
        .catch((err) => console.error('error from get singleLook, err'));
    }
  }


  ratingChange = (e) => {
    e.preventDefault();
    this.setState({ selectedFile: e.target.files[0].name });
  }


  ratingChange = (e) => {
    e.preventDefault();
    this.setState({ lookRating: e.target.value });
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

  editLookEvent =(e) => {
    e.preventDefault();
    const { lookId } = this.props.match.params;
    const editLook = {
      rating: this.state.lookRating,
      imgUrl: this.state.imageUrl,
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
      imgUrl: this.state.imageUrl,
      steps: this.state.lookSteps,
      products: this.state.lookProducts,
      share: this.state.lookProducts,
      uid: authData.getUid(),
    };
    lookData.saveLook(newLook)
      .then(() => this.props.history.push('/'))
      .catch((err) => console.error('error from createLook, err'));
  }

  imageChange = (e) => {
    e.preventDefault();
    this.setState({ imageUrl: e.target.value });
  }

  handleUploadSuccess = (filename) => {
    this.setState({
      image: filename,
    });
    firebase.storage().ref('lookImage').child(filename).getDownloadURL()
      .then((url) => this.setState({
        imageUrl: url,
      }));
  }


  render() {
    const {
      lookRating, lookProducts, lookShare, lookSteps,
    } = this.state;

    const { lookId } = this.props.match.params;

    return (
    <div className="container">
    <form className="mainForm">
      <div className="text-center">
        <h3>THE BEAT</h3>
      </div>
      <div className="form-group">
          <p htmlFor="look-img" className="titles">Upload Image</p>
          {this.state.image && <img className="uploadedImg" src={this.state.imageUrl} alt="" />}
          <FileUploader
            accept="image/*"
            name='image'
            storageRef={firebase.storage().ref('lookImage')}
            onUploadSuccess={this.handleUploadSuccess}
            className="uploadFileArea"
          />
      </div>
      {/* <br/> */}
      <div className="form-group routineArea">
        <p htmlFor="look-steps" className="titles">The Routine:</p>
        <textarea
        className="form-control textareaStyles"
        value={lookSteps}
        onChange= {this.stepsChange}
        placeholder="Enter Your Routine"
        id="look-steps"
        />
      </div>

      {/* <br/> */}
      <div className="form-group productArea">
        <p htmlFor="look-products " className="titles">The Products:</p>
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

        <div className="form-group ratingArea">
            <p htmlFor="look-rating" className="titles">The Rating:</p>
            <div className="select textareaStyles">
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
        <br/>
        <div>
          <div className="form-group ratingArea">
              <p htmlFor="look-share" className="titles">To Share or Not To Share?</p>
              <div className="select textareaStyles">
              <select className="selectOptions" value={lookShare} onChange={this.shareChange}>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              </div>
          </div>
        </div>


      <div className="container d-flex justify-content-center formBtns">
        <div>
        {lookId
          ? <button className="btn btn-outline-dark btn-lg editBtn" onClick={this.editLookEvent}>Edit</button>
          : <button className="btn btn-outline-dark btn-lg saveBtn" onClick={this.createLookEvent}>Add</button>
        }
        <button className="btn btn-outline-dark btn-lg closeBtn"><Link className="closeTitle" to="/">Close</Link></button>
      </div>

      </div>
    </form>
    </div>
    );
  }
}

export default LookForm;
