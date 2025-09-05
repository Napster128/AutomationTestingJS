import factorial from './factorial';

test('1! = 1', () => {
  expect(factorial(1)).toBe(1);
});

test('2! = 2', () => {
  expect(factorial(2)).toBe(2);
});

test('4! = 24', () => {
  expect(factorial(4)).toBe(24);
});

test('0! = 1', () => {
  expect(factorial(0)).toBe(1);
});