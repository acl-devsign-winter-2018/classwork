import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import { loadAlbum, removeAlbum } from './actions';

const views = ['thumbnail', 'gallery', 'list'];

class AlbumDetail extends PureComponent {

  componentDidMount() {
    const { id, loadAlbum } = this.props;
    loadAlbum(id);
  }

  handleDelete = () => {
    if(!confirm('Are you really sure?')) return;
    const { id, removeAlbum, history } = this.props;
    removeAlbum(id).then(() => history.push('/albums'));
  };

  render() {
    const { album, match } = this.props;
    if(!album) return null;
    
    const { url } = match;

    return (
      <div>
        <h2><Link to="/albums">All Albums</Link> &gt; {album.name}</h2>
        {views.map(view => (
          <div key={view}>
            <Link to={`${url}/${view}`}>{view}</Link>
          </div>
        ))}
        <button onClick={this.handleDelete}>Delete this Album</button>
        <Switch>
          <Route path="/albums/:id/thumbnail" render={() => <div>Thumbnail View </div>}/>
          <Route path="/albums/:id/gallery" render={() => <div>Gallery View </div>}/>
          <Route path="/albums/:id/list" render={() => <div>List View </div>}/>
          <Redirect to={`${url}/thumbnail`}/>
        </Switch>
      </div>
    );
  }
}

export default connect(
  ({ album }, { match }) => ({
    album,
    id: match.params.id
  }),
  { loadAlbum, removeAlbum }
)(AlbumDetail);