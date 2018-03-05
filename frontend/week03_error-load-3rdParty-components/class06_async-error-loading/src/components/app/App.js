import React, { Component } from 'react';
import { connect } from 'react-redux';
import Notes from '../notes/Notes';

class App extends Component {
  
  render() {
    const { loading } = this.props;
    return (
      <div>
        <p>{loading ? 'I am loading' : 'I am NOT loading'}</p>
        <Notes/>
      </div>
    );
  }
}

export default connect(
  state => ({ loading: state.loading }),
  null
)(App);

