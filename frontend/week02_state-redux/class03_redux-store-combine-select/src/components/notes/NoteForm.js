import React, { Component } from 'react';

export default class NoteForm extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      ...props
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.onEdit({
      ...this.state
    });

    this.setState({ text: '' });
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { id, text } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input required name="text" value={text} onChange={this.handleChange}/>
        <button type="submit">{ id ? 'Update' : 'Add' }</button>
      </form>
    );
  }
}
