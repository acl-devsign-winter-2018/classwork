import { get, post, put, del } from './request';

const URL = 'https://image-gallery-server.herokuapp.com/api';
const ALBUM_URL = `${URL}/albums`;
const USER_URL = `${URL}/users`;

export const getAlbums = () => get(ALBUM_URL);
export const getAlbum = id => get(`${ALBUM_URL}/${id}`);
export const getAlbumDetail = id => get(`${ALBUM_URL}/${id}`);
export const postAlbum = album => post(ALBUM_URL, album);
export const updateAlbum = album => put(`${ALBUM_URL}/${album._id}`, album);
export const deleteAlbum = id => del(`${ALBUM_URL}/${id}`);

export const getUsers = () => get(USER_URL);
