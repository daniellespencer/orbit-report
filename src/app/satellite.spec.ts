import { Satellite } from './satellite';

describe('Satellite', () => {
  it('should create an instance', () => {
    expect(new Satellite("ISS", "Space Station", "1998-11-20", "LOW", true)).toBeTruthy();
  });
});
