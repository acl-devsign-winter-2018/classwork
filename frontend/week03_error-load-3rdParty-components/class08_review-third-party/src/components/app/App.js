import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadAlbums } from '../albums/actions';

class App extends Component {

  componentDidMount() {
    this.props.loadAlbums();
  }

  render() {
    const { albums } = this.props;

    return (
      <div>
        <h1>Hello Actions</h1>
        <ul>
          {albums.map(album => (
            <li key={album._id}>{album.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(
  ({ albums }) => ({ albums }),
  { loadAlbums }
)(App);