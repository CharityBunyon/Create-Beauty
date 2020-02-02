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
  state = {
    lookRating: '',
    lookSteps: '',
    lookProducts: '',
    image: '',
    imageUrl: '',
  };

  componentDidMount() {
    const { lookId } = this.props.match.params;
    if (lookId) {
      lookData
        .getSingleLook(lookId)
        .then((response) => {
          this.setState({
            lookRating: response.data.rating,
            imageUrl: response.data.imgUrl,
            lookSteps: response.data.steps,
            lookProducts: response.data.products,
          });
        })
        .catch((err) => console.error('error from get singleLook, err'));
    }
  }

  ratingChange = (e) => {
    e.preventDefault();
    this.setState({ lookRating: e.target.value });
  };

  stepsChange = (e) => {
    e.preventDefault();
    this.setState({ lookSteps: e.target.value });
  };

  productsChange = (e) => {
    e.preventDefault();
    this.setState({ lookProducts: e.target.value });
  };

  editLookEvent = (e) => {
    e.preventDefault();
    const { lookId } = this.props.match.params;
    const editLook = {
      rating: this.state.lookRating,
      imgUrl: this.state.imageUrl,
      steps: this.state.lookSteps,
      products: this.state.lookProducts,
      uid: authData.getUid(),
    };
    lookData
      .updateLook(lookId, editLook)
      .then(() => this.props.history.push('/'))
      .catch((err) => console.error('error from edit look', err));
  };

  createLookEvent = (e) => {
    e.preventDefault();
    const newLook = {
      rating: this.state.lookRating,
      imgUrl: this.state.imageUrl,
      steps: this.state.lookSteps,
      products: this.state.lookProducts,
      uid: authData.getUid(),
    };
    lookData
      .saveLook(newLook)
      .then(() => this.props.history.push('/'))
      .catch((err) => console.error('error from createLook, err'));
  };


  handleUploadSuccess = (filename) => {
    this.setState({
      image: filename,
    });
    firebase
      .storage()
      .ref('lookImage')
      .child(filename)
      .getDownloadURL()
      .then((url) => this.setState({
        imageUrl: url,
      }));
  };

  // Creating and Editing a Look

  // I created a look form where there are various input types
  // Each input type has a value of defined state and they each onChange handler excluding images that will change the state based on the targets value
  // In order to create a new look I create an object called new look that will save all state changes, create a uid and call the saveLook function that allows me to save this look in firebase. The I push the new look to the homepage
  // In order to edit a new look I create an object called edit look that will save all state changes, but all retrieve the lookId, and called the editLook function that will allow me to edit a look and push it back to the homepage


  // Image Call with Creating and Editing a Look

  // 1. Import authData, FileUploader, lookData, and config
  // 2. Imported fileUploader and firebase
  // 3. Call firebase.initializeApp(config)
  // 4. Created image in state to store the image and imageUrl to store the response(STRING) url I receive back
  // 5. Within fileuploader I'm accepting an image, the name with be the images name which is the "form" that will handle the file upload then I need it send the data to my storage folder and my firebase realtime database
  // 6. I used storageRef attribute to reference the file lookImage I created in firebase storage
  // 7. I use the onUploadSuccess attribute that contains an event listener which I'll pass in a filename
  // 8.  In the onUploadSuccess function I'm going to set the state of image, then I access the firebase storage lookImage folder. Then I'm grabbing the child with the filename.
  // 9. I call the getDownloadURL function that asynchronously retrieves a long lived download URL with a revokable token from my storage container
  // 10. Once the response comes back I am setting the state of imageUrl with the url I received from my storage container. I console.log(this.state) in my render to check to see the response I was getting back. I uploaded a file and noticed that I was getting back two responses(the image name and the imageUrl)
  // 11. Made lookImage in the storage area in firebase to check to see if my image I uploaded was getting saved there
  // 12. In order to get the image to show in my form I wrapped an image tag inside a parameter that will grab the image url in my image state and use it within my src attribute
  // 13. In my componentDidMount, create, and edit functions I set the state of imageUrl: response.data.imgUrl so that when a user creates or edits a new look the image will pop up in the form. I wanted it to show on the screen because I couldn't tell if the response was coming back successfully.

  render() {
    const { lookRating, lookProducts, lookSteps } = this.state;

    const { lookId } = this.props.match.params;

    return (
      <div className="container">
        <form className="mainForm">
          <div className="text-center">
            <h3 className="formTitle">THE BEAT DEETS</h3>
          </div>
          <div className="form-group">
            <p htmlFor="look-img" className="titles">
              Upload Image
            </p>
            {this.state.image && (
              <img className="uploadedImg" src={this.state.imageUrl} alt="" />
            )}
            <FileUploader
              accept="image/*"
              name="image"
              storageRef={firebase.storage().ref('lookImage')}
              onUploadSuccess={this.handleUploadSuccess}
              className="uploadFileArea"
            />
          </div>
          {/* <br/> */}
          <div className="form-group routineArea">
            <p htmlFor="look-steps" className="titles">
              The Routine:
            </p>
            <textarea
              className="form-control textareaStyles"
              value={lookSteps}
              onChange={this.stepsChange}
              placeholder="Enter Your Routine"
              id="look-steps"
            />
          </div>

          {/* <br/> */}
          <div className="form-group productArea">
            <p htmlFor="look-products " className="titles">
              The Products:
            </p>
            <textarea
              className="form-control textareaStyles"
              value={lookProducts}
              name="lookProducts"
              onChange={this.productsChange}
              placeholder="Enter All Products"
              id="look-products"
            />
          </div>
          <br />

          <div className="form-group ratingArea">
            <p htmlFor="look-rating" className="titles">
              The Rating:
            </p>
            <div className="select textareaStyles">
              <select
                className="selectOptions1"
                value={lookRating}
                onChange={this.ratingChange}
              >
                <option value="AU NATURAL">Au Natural</option>
                <option value="THAT BITCH">That Bitch</option>
                <option value="G.O.A.T">G.O.A.T</option>
                <option value="CLASSIC">Classic</option>
                <option value="SNATCHED">Snatched</option>
                <option value="YASSS QUEEN">Yasss Queen</option>
              </select>
            </div>
          </div>
          <br />

          <div className="container d-flex justify-content-center formBtns">
            <div>
              {lookId ? (
                <button
                  className="btn btn-outline-dark btn-lg editBtn"
                  onClick={this.editLookEvent}
                >
                  Edit
                </button>
              ) : (
                <button
                  className="btn btn-outline-dark btn-lg saveBtn"
                  onClick={this.createLookEvent}
                >
                  Add
                </button>
              )}
              <button className="btn btn-outline-dark btn-lg closeBtn">
                <Link className="closeTitle" to="/">
                  Close
                </Link>
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default LookForm;
