import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import Button from '../Button';
import { ButtonVariant } from '../types';

describe('Button', () => {
  beforeEach(() => {});

  describe('contained', () => {
    it('Renders correctly ', () => {
      render(<Button label="Click me" size="small" />);
      const buttonLabel = screen.getByText('Click me');

      expect(buttonLabel).toBeDefined();
    });

    it('clicks correctly ', () => {
      const mockCallBack = jest.fn();
      render(
        <Button
          label="Click me"
          size="default"
          variant={ButtonVariant.CONTAINED}
          clickHandler={mockCallBack}
        />,
      );
      const buttonLabel = screen.getByText('Click me');

      expect(buttonLabel).toBeDefined();
      buttonLabel.click();

      expect(mockCallBack).toHaveBeenCalledTimes(1);
    });

    it('snapshot test', () => {
      const tree = renderer.create(<Button label="Click me" size="small" />).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe('outlined', () => {
    it('Renders correctly ', () => {
      render(<Button label="Click me" size="small" variant={ButtonVariant.OUTLINED} />);
      const buttonLabel = screen.getByText('Click me');

      expect(buttonLabel).toBeDefined();
    });

    it('clicks correctly ', () => {
      const mockCallBack = jest.fn();
      render(
        <Button
          label="Click me"
          size="small"
          variant={ButtonVariant.OUTLINED}
          clickHandler={mockCallBack}
        />,
      );
      const buttonLabel = screen.getByText('Click me');

      expect(buttonLabel).toBeDefined();
      buttonLabel.click();

      expect(mockCallBack).toHaveBeenCalledTimes(1);
    });

    // it('snapshot test', async () => {
    //   const tree = renderer
    //     .create(<Button label="Click me" size="small" variant={ButtonVariant.OUTLINED} />)
    //     .toJSON();

    //   expect(tree).toMatchSnapshot();
    // });

    describe('text', () => {
      it('Renders correctly ', () => {
        render(<Button label="Click me" size="small" variant={ButtonVariant.TEXT} />);
        const buttonLabel = screen.getByText('Click me');

        expect(buttonLabel).toBeDefined();
      });

      it('clicks correctly ', () => {
        const mockCallBack = jest.fn();
        render(
          <Button
            label="Click me"
            size="small"
            variant={ButtonVariant.OUTLINED}
            clickHandler={mockCallBack}
          />,
        );
        const buttonLabel = screen.getByText('Click me');

        expect(buttonLabel).toBeDefined();
        buttonLabel.click();

        expect(mockCallBack).toHaveBeenCalledTimes(1);
      });

      // it('snapshot test', () => {
      //   const tree = renderer
      //     .create(<Button label="Click me" size="small" variant={ButtonVariant.TEXT} />)
      //     .toJSON();

      //   expect(tree).toMatchSnapshot();
      // });
    });

    describe('link', () => {
      it('Renders correctly ', () => {
        render(<Button label="Click me" size="small" variant={ButtonVariant.LINK} />);
        const buttonLabel = screen.getByText('Click me');

        expect(buttonLabel).toBeDefined();
      });

      // it('snapshot test', () => {
      //   const tree = renderer
      //     .create(<Button label="Click me" size="small" variant={ButtonVariant.LINK} />)
      //     .toJSON();

      //   expect(tree).toMatchSnapshot();
      // });
    });
  });
});
