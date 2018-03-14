import { ROOM_LOAD } from './reducers';
import { setRoom, onRoomList } from '../../services/chatApi';

let listening = false;

export function loadRooms() {
  return dispatch => {
    if(listening) return;
    listening = true;

    onRoomList(rooms => {
      dispatch({
        type: ROOM_LOAD,
        payload: rooms
      });
    });

    // roomsRef.on('value', data => {
    //   dispatch({
    //     type: ROOM_LOAD,
    //     payload: data.val()
    //   });
    // });

  };
}

export function addRoom(name) {
  return () => setRoom(name);
}