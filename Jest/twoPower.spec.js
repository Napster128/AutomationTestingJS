import twoPower from './twoPower';

describe('twoPower()', () => {
  it('should calculate 2^0 as 1', () => {
    expect(twoPower(0)).toBe(1);
  })
 it('should calculate 2^2 as 4', () => {
    expect(twoPower(2)).toBe(4);
 });
  it('should calculate 2^-1 as 0.5', () => {
    expect(twoPower(-1)).toBe(0.5);
  })
});