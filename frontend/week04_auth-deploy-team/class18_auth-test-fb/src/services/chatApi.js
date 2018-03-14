import { db } from './firebase';

export const roomsRef = db.ref('rooms');

const pivot = map => dict => {
  if(!dict) return [];

  return Object.keys(dict).map(key => map([key, dict[key]]));
};

const stringPivot = pivot(([key, value]) => { 
  return {
    name: value,
    key
  };
});

export const onRoomList = handler => {
  roomsRef.on('value', data => {
    const val = data.val();
    if(!val) handler([]);

    const list = stringPivot(data.val());
    handler(list);
  });
};

export const setRoom = roomName => {
  const roomRef = roomsRef.push();

  return roomRef
    .set(roomName)
    .then(() => {
      return { name: roomName, key: roomRef.key };
    });
};
