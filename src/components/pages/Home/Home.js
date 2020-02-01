import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';
import lookData from '../../../helpers/data/lookData';
import authData from '../../../helpers/data/authData';
import Looks from '../../shared/Looks/Looks';

class Home extends React.Component {
  state = {
    looks: [],
    filteredLooks: [],
    searchedLook: '',
  }

  componentDidMount() {
    this.getLooks();
  }

  getLooks = () => {
    lookData.getLooksByUid(authData.getUid())
      .then((looks) => this.setState({ looks }))
      .catch((err) => console.error('error from get looks', err));
  }


  deleteLook = (lookId) => {
    lookData.deleteLook(lookId)
      .then(() => this.getLooks())
      .catch((err) => console.error('error deleting look', err));
  }

  filterLooks = (e) => {
    const input = e.target.value.toUpperCase();
    if (e.target.value !== '') {
      const newLooks = [];
      const newLooksList = this.state.looks.filter((look) => look.rating.toUpperCase().search(input) !== -1);
      newLooks.push(newLooksList);
      this.setState({ looks: newLooksList });
    } else {
      this.getLooks();
    }
  }


  render() {
    return (
      <div className="Home">
        <div className="searchArea">
        <label className="beatLabel">Search By Beat Rating: </label>
        <input
          type="text"
          className="searchBox"
          placeholder="Search"
          value={this.searchedLook}
          onChange={this.filterLooks}
        />
        </div>
        <div className="text-center">
        <Link className="btn btn-outline-dark btn-lg createBtn" to="/look/new">Create A Look</Link>
        <div className="looks container-fluid d-flex flex-wrap">
          {this.state.looks.map((look) => <Looks key={look.id} look={look} deleteLook={this.deleteLook} />)}
        </div>
        </div>
      </div>
    );
  }
}
export default Home;
