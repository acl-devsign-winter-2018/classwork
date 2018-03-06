import React, { Component } from 'react';
import { connect } from 'react-redux';
import Notes from '../notes/Notes';

class App extends Component {
  
  render() {
    const { loading, error } = this.props;
    return (
      <div>
        <p>{loading ? 'I am loading' : 'I am NOT loading'}</p>
        <Notes/>
        { error && 
          <pre style={{ color: 'red' }}>
            {error.message 
              ? error.message 
              : error.error ? error.error : error
            }
          </pre>
        }
      </div>
    );
  }
}

export default connect(
  state => ({ 
    loading: state.loading,
    error: state.error 
  }),
  null
)(App);

