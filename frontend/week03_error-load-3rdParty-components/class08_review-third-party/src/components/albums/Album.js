import React, { PureComponent } from 'react';
import styled from 'styled-components';


const FancyListItem = styled.li`
  color: ${({ name }) => name[0].toLowerCase() === 'j' ? 'blue' : 'green'};
`;

class Album extends PureComponent {
  render() {
    const { name } = this.props;

    return (
      <FancyListItem name={name}>{name}</FancyListItem>
    );
  }
}

export default Album;