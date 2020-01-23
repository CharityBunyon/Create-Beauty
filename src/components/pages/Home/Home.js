import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';
import lookData from '../../../helpers/data/lookData';
import authData from '../../../helpers/data/authData';
import Looks from '../../shared/Looks/Looks';

class Home extends React.Component {
  state = {
    looks: [],
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

  render() {
    return (
      <div className="Home text-center">
        <h1 className="welcome">Welcome, Nikki!</h1>
        <Link className="btn btn-outline-dark btn-lg createBtn" to="/look/new">Create A Look</Link>
        <div className="looks container-fluid d-flex flex-wrap">
          {this.state.looks.map((look) => <Looks key={look.id} look={look} deleteLook={this.deleteLook} />)}
        </div>
      </div>
    );
  }
}
export default Home;
