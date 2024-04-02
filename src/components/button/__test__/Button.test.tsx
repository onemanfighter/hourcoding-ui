import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import Button from '../Button';

describe('Login component tests', () => {
  beforeEach(() => {
    // write someting before each test
  });

  afterEach(() => {
    // write someting after each test
  });

  it('Renders correctly initial document', async () => {
    /* first we visit /login and test if the string in the element with class "login-label"  has"Please Log In" is there */
    render(<Button variant="contained" label="Click me" size="small" />);
    const loginLabel = screen.getByText('Click me');

    expect(loginLabel).toBeDefined();
  });

  it('Snapshot test', () => {
    const tree = renderer
      .create(<Button variant="contained" label="Click me" size="small" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
