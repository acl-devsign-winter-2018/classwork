import { checkResponseData } from './movieApi';

describe('search response', () => {

  it('returns json if Response is "True"', () => {
    const data = { Response: 'True' };
    const output = checkResponseData(data);
    expect(output).toBe(data);
  });

  it('throws and error with data.Error if Response is "False"', () => {
    const data = { Response: 'False', Error: 'This is the error' };
    expect(() => {
      checkResponseData(data);
    }).toThrow(data.Error);
  });
});