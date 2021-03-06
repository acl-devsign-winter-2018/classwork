import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import ReactModal from 'react-modal';
import { addAlbum } from './actions';
import { primary } from '../colors';

const Button = styled.button`
  outline: 0;
  border: none;
  background: ${({ background }) => background || 'white' };
  color: ${primary};
`;

class AddAlbum extends Component {

  state = {
    open: false
  };

  handleOpenAdd = () => {
    this.setState({ open: true });
  };

  handleCloseAdd = () => {
    this.setState({ open: false });
  };

  handleSubmit = event => {
    const { addAlbum, history } = this.props;
    event.preventDefault();

    addAlbum({
      name: event.target.elements.name.value
    }).then(album => {
      this.handleCloseAdd();
      // navigate to url
      history.push(`/albums/${album._id}`);
    });
  };

  render() {
    const { open } = this.state;
    
    return (
      <div>
        <button onClick={this.handleOpenAdd}>Add</button>
        <ReactModal 
          isOpen={open}
          onRequestClose={this.handleCloseAdd}
        >
          <AddForm onSubmit={this.handleSubmit}/>
        </ReactModal>
      </div> 
    );
  }
}

const AddForm = ({ onSubmit }) => (
  <div>
    <p>Some text in a add album</p>
    <form onSubmit={onSubmit}>
      <StyledTextControl label="Name" name="name" required/>
      <Button>Add</Button>
    </form>
  </div>
);

const TextControl = ({ label, className, ...rest }) => (
  <label className={className}>
    <span>{label}:</span>
    <input {...rest}/>
  </label>
);

const StyledTextControl = styled(TextControl)`
  color: green;
  font-weight: bolder;
`;

export default withRouter(
  connect(
    null,
    { addAlbum }
  )(AddAlbum)
);