import { ALBUMS_LOAD } from './reducers';
import { getAlbums } from '../../services/api';

export const loadAlbums = () => ({
  type: ALBUMS_LOAD,
  payload: getAlbums()
});