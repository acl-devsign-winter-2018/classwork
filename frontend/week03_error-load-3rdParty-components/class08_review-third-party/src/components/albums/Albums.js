import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { loadAlbums } from '../albums/actions';
import Album from './Album';
import AddAlbum from './AddAlbum';
import styles from './Albums.css';

class Albums extends PureComponent {

  componentDidMount() {
    this.props.loadAlbums();
  }
  
  render() {
    const { albums } = this.props;

    return (
      <section className={styles.albums}>
        <AddAlbum/>
        <ul>
          {albums.map(album => (
            <Album key={album._id} {...album}/>
          ))}
        </ul>
        <p>Some orange text</p>
      </section>
    );
  }
}

export default connect(
  ({ albums }) => ({ albums }),
  { loadAlbums }
)(Albums);