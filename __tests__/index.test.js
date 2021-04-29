import {
  log
} from '../src/index';

describe('log foo', () => {
  test('output foo', () => {
    expect(log('foo')).toBe(undefined);
  });
});