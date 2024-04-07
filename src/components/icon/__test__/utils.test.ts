import { getIconSize } from '../utils';

describe('Utils', () => {
  it('should return the 24 for small size', () => {
    const iconSize = getIconSize('small');

    expect(iconSize).toMatchSnapshot();
    expect(iconSize).toBe(24);
  });

  it('should return the 32 for medium size', () => {
    const iconSize = getIconSize('medium');

    expect(iconSize).toMatchSnapshot();
    expect(iconSize).toBe(32);
  });

  it('should return the 48 for large size', () => {
    const iconSize = getIconSize('large');

    expect(iconSize).toMatchSnapshot();
    expect(iconSize).toBe(48);
  });
});
