import React from 'react';
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

  render() {
    return (
      <div className="Home">
        <h1 className="welcome">Welcome, Nikki!</h1>
        <div className="looks d-flex flex-wrap">
          {this.state.looks.map((look) => <Looks key={look.id} look={look}/>)}
        </div>
      </div>
    );
  }
}
export default Home;
