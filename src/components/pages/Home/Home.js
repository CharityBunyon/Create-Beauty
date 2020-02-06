import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';
import lookData from '../../../helpers/data/lookData';
import authData from '../../../helpers/data/authData';
import Looks from '../../shared/Looks/Looks';

class Home extends React.Component {
  state = {
    looks: [],
  };

  componentDidMount() {
    this.getLooks();
  }

  getLooks = () => {
    lookData
      .getLooksByUid(authData.getUid())
      .then((looks) => this.setState({ looks }))
      .catch((err) => console.error('error from get looks', err));
  };

  deleteLook = (lookId) => {
    lookData
      .deleteLook(lookId)
      .then(() => this.getLooks())
      .catch((err) => console.error('error deleting look', err));
  };

  filterLooks = (e) => {
    const input = e.target.value.toUpperCase();
    if (e.target.value !== '') {
      // const newLooks = [];
      const newLooksList = this.state.looks.filter(
        (look) => look.rating.toUpperCase().search(input) !== -1,
      );
      this.setState({ looks: newLooksList });
    } else {
      this.getLooks();
    }
  };

  // Looks (read & delete)

  // 1. Imported Looks, lookData, and authData
  // 2. In render I created a domstring that would house all of my users looks
  // 3. In order to set the state of looks created a getLooks function that gets all looks by uid and grabs the uid
  // 4. Then I map over them and passing a look through
  // 5. Passed down my Looks domstring that contains all look info and assigns a unique key of "look.id" and mounted all looks to the virtual dom
  // 6. The delete button lives in the Looks component so in order to get it to work I made a deleteLook function that will remove the data(look) from the home page once the user clicks the delete button in the look card.
  // 7. Passed the deleteLook function down within the Look area in domstring


  // Filter Looks

  // 1. Added a input tag with a type of text and placeholder of search.
  // 2. I added a label tag as well
  // 3. To filter looks I made a filterLooks function that will use the onChange event handler to listen to an input’s change in value
  // 4. I set the value of input to the target value and attached the toUpperCase method
  // 5. Then I created an if statement that will check to see if the input are isn't empty then it will filter through my state of looks by passing in the look and filtering by rating.
  // 6. I used the search method which searches a string for a specified value, and returns the position of the match of the input value. The search method returns -1 if no match is found.
  // 7. If a match is found then I can going to set the state of Looks to newLooksList else call getLooks to display all looks again

  render() {
    return (
      <div className="Home">
        <div className="searchArea">
          <label className="beatLabel">Search By Beat Rating: </label>
          <input
            type="text"
            className="searchBox"
            placeholder="Search"
            onChange={this.filterLooks}
          />
        </div>
        <div className="text-center">
          <Link
            className="btn btn-outline-dark btn-lg createBtn"
            to="/look/new">
            Create A Look
          </Link>
          <div className="looks container-fluid d-flex flex-wrap">
            {this.state.looks.map((look) => (
              <Looks key={look.id} look={look} deleteLook={this.deleteLook} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
