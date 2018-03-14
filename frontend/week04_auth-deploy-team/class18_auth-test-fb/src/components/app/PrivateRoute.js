import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ user, component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    user 
      ? <Component {...props} />
      : <Redirect to={{ pathname: '/auth/google', state: { from: props.location } } }/>
  )}/>
);

export default connect(
  ({ user }) => ({ user }),
  null
)(PrivateRoute);