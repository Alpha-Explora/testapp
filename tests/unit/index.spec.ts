import { SERVICE_NAME } from '../../src/index';

describe('testapp', () => {
  it('should export SERVICE_NAME', () => {
    expect(SERVICE_NAME).toBe('testapp');
  });
});