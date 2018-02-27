import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNote } from './actions';

class Notes extends Component {
  
  state = {
    text: ''
  };

  handleSubmit = event => {
    event.preventDefault();
    const { text } = this.state;
    this.props.addNote({ text });
    this.setState({ text: '' });
  };

  render() {
    const { text } = this.state;
    const { notes } = this.props;
    return (
      <div>
        <pre>{JSON.stringify(notes, true, 2)}</pre>
        <form onSubmit={this.handleSubmit}>
          <input value={text} onChange={({ target }) => {
            this.setState({ text: target.value });
          }}/>
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
