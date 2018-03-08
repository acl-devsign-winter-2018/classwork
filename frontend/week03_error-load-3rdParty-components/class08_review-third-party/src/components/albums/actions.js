import { ALBUMS_LOAD, ALBUM_LOAD, ALBUM_REMOVE, ALBUM_ADD } from './reducers';
import { getAlbums, getAlbum, deleteAlbum, postAlbum } from '../../services/api';

export const loadAlbums = () => ({
  type: ALBUMS_LOAD,
  payload: getAlbums()
});

export const loadAlbum = id => ({
  type: ALBUM_LOAD,
  payload: getAlbum(id)
});

export const addAlbum = album => ({
  type: ALBUM_ADD,
  payload: postAlbum(album)
});

export const removeAlbum = id => ({
  type: ALBUM_REMOVE,
  payload: deleteAlbum(id).then(() => id)
});