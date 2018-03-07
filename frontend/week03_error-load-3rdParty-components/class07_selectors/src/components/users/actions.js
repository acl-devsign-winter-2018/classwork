import { USERS_LOAD } from './reducers';
import api from '../../services/notesApi';

export function loadUsers() {
  return {
    type: USERS_LOAD,
    payload: api.loadUsers()
  };
}