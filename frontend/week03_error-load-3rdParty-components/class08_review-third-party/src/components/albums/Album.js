import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


const FancyListItem = styled.li`
  color: ${({ name }) => name[0].toLowerCase() === 'j' ? 'blue' : 'green'};
`;

class Album extends PureComponent {
  render() {
    const { _id, name } = this.props;

    return (
      <FancyListItem name={name}>
        <Link to={`/albums/${_id}`}>{name}</Link>
      </FancyListItem>
    );
  }
}

export default connect(
  ({ albumsById }, { id }) => albumsById[id],
  null
)(Album);