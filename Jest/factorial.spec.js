import factorial from './factorial';

describe('factorial', () => {
  it('1! = 1', () => {
    expect(factorial(1)).toBe(1);
  });

  it('3! = 6', () => {
    expect(factorial(3)).toBe(6);
  });
})