// jest.mock('../../services/chatApi', () => ({ 
//   roomsRef: {
//     on: jest.fn((event, handler) => {
//       handler({ val() { return [1, 2, 3]; } });
//     })
//   }
// }));
jest.mock('../../services/chatApi', () => ({ 
  onRoomList: jest.fn(handler => {
    handler([1, 2, 3]);
  })
}));

import { ROOM_LOAD } from './reducers';
import { loadRooms } from './actions';
// get the mock

describe('room actions', () => {
  
  
  describe('load rooms', () => {

    
    it('loads rooms', () => {
      const thunk = loadRooms();
      expect(typeof thunk).toBe('function');
      const dispatch = jest.fn();
      thunk(dispatch);
      
      expect(dispatch).toBeCalledWith({
        type: ROOM_LOAD,
        payload: [1, 2, 3]
      });
    });
    
    it('does not reload rooms', () => {
      const thunk = loadRooms();
      const dispatch = jest.fn();
      thunk(dispatch);
      expect(dispatch.mock.calls.length).toBe(0);
    });
  });
});