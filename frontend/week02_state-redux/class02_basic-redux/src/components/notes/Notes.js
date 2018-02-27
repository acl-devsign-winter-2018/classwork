import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNote } from './actions';

class Notes extends Component {
  
  handleSubmit = event => {
    event.preventDefault();
    this.props.addNote({
      text: event.target.elements.text.value
    });
  };

  render() {
    const { notes } = this.props;
    return (
      <div>
        <pre>{JSON.stringify(notes, true, 2)}</pre>
        <form onSubmit={this.handleSubmit}>
          <input name="text"/>
          <button type="submit">Add</button>
        </form>
      </div>);
  }
}

export default connect(
  // map state to props
  state => ({ notes: state }),
  // map dispatch to props
  // this gets modified to work as expected,
  // more on the guts tomorrow
  { addNote }
)(Notes);
