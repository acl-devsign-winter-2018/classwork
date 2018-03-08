import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadAlbums } from '../albums/actions';
import Album from './Album';
import AddAlbum from './AddAlbum';
import styles from './Albums.css';

class Albums extends PureComponent {

  componentDidMount() {
    this.props.loadAlbums();
  }
  
  render() {
    const { albums, recentAlbums } = this.props;

    return (
      <section className={styles.albums}>
        <AddAlbum/>
        <ul>
          {albums.map(albumId => (
            <Album key={albumId} id={albumId}/>
          ))}
        </ul>
        <p>Some orange text</p>
        <h3>Recent Albums</h3>
        <ul>
          {recentAlbums.map(albumId => (
            <Album key={albumId} id={albumId}/>
          ))}
        </ul>
      </section>
    );
  }
}

export default connect(
  ({ albums, recentAlbums }) => ({ albums, recentAlbums }),
  { loadAlbums }
)(Albums);