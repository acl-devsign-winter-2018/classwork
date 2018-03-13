import { get, post } from './request';
import { config } from './firebase';

const URL = `https://${config.projectId}.firebaseio.com`;
const MATCHES_URL = `${URL}/matches.json`;

export const getAll =  () => get(MATCHES_URL);

export const save = game => post(MATCHES_URL, game);