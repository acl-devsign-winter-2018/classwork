import React, { PureComponent, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { listenForUser, logout } from './actions';
import Rooms from '../rooms/Rooms';
import { Signin, Signup } from './Auth';
import GoogleAuth from './GoogleAuth';
import PrivateRoute from './PrivateRoute';

class App extends PureComponent {

  componentDidMount() {
    this.props.listenForUser();
  }

  render() {
    const { user, logout } = this.props;

    return (
      <Router>
        <Fragment>
          <header>
            <h1>Chat Rooms</h1>
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/rooms">Rooms</Link></li>
                {
                  user
                    ? <li><Link to="/" onClick={logout}>Log out</Link></li>
                    : 
                    <Fragment>
                      <li><Link to="/auth/signin">Sign In</Link></li>
                      <li><Link to="/auth/signup">Sign Up</Link></li>
                      <li><Link to="/auth/google">Google Auth</Link></li>
                    </Fragment>
                }
              </ul>
            </nav>
          </header>

          <main>
            <Switch>
              <Route exact path="/" component={Home}/>
              <PrivateRoute exact path="/rooms" component={Rooms}/>
              <Route exact path="/auth/signin" component={Signin}/>
              <Route exact path="/auth/signup" component={Signup}/>
              <Route exact path="/auth/google" component={GoogleAuth}/>
              <Redirect to="/"/>
            </Switch>
          </main>
          
          <footer>
            {user ? <pre>{JSON.stringify(user, true, 2)}</pre> : 'no user'}
            &copy; 2018 Alchemy Code Lab
          </footer>
        </Fragment>
      </Router>
    );
  }
}

function Home() {
  return <div>I am Home</div>;
}

export default connect(
  ({ user }) => ({ user }),
  { listenForUser, logout }
)(App);