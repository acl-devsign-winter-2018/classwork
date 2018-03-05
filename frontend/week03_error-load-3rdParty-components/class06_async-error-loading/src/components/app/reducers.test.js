import { loading, LOAD_START, LOAD_END } from './reducers';

describe('loading reducer', () => {

  it('initial state', () => {
    const state = loading(undefined, {});
    expect(state).toBe(false);
  });

  it('load start', () => {
    const state = loading(false, { type: LOAD_START });
    expect(state).toBe(true);
  });

  it('load end', () => {
    const state = loading(true, { type: LOAD_END });
    expect(state).toBe(false);
  });

});