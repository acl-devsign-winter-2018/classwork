import request from './request';

const URL = 'https://image-gallery-server.herokuapp.com/api';

export const getAlbums = () => request(`${URL}/albums`);