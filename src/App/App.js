import React from 'react';
import {
  BrowserRouter as Router, Route, Redirect, Switch,
} from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConnection from '../helpers/data/connection';
import './App.scss';

import Auth from '../components/pages/Auth/Auth';
import Home from '../components/pages/Home/Home';
import SingleLook from '../components/pages/SingleLook/SingleLook';
import Nav from '../components/shared/Nav/Nav';
import Footer from '../components/shared/Footer/Footer';
import LookForm from '../components/pages/LookForm/LookForm';


const PublicRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === false ? <Component {...props} {...rest}/> : <Redirect to={{ pathname: '/', state: { from: props.location } }} />);
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};
const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === true ? <Component {...props} {...rest}/> : <Redirect to={{ pathname: '/auth', state: { from: props.location } }} />);
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

firebaseConnection();

class App extends React.Component {
  state = {
    authed: false,
    userObj: '',
  }


  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((userObj) => {
      if (userObj) {
        this.setState({ authed: true, userObj });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { authed, userObj } = this.state;

    return (
      <div>
        <Router>
        <Nav authed={authed} userObj={userObj}/>
          <Switch>
          <PublicRoute path="/auth" exact component={Auth} authed={authed}/>
          <PrivateRoute path="/" exact component={Home} authed={authed} userObj={userObj}/>
          <PrivateRoute path="/look/new" exact component={LookForm} authed={authed}/>
          <PrivateRoute path="/look/:lookId/edit" exact component={LookForm} authed={authed}/>
          <PrivateRoute path="/look/:lookId" exact component={SingleLook} authed={authed}/>
          </Switch>
          <Footer/>
        </Router>
      </div>
    );
  }
}

export default App;
