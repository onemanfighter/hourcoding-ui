import React from 'react';
import { render, screen } from '@testing-library/react';

import renderer from 'react-test-renderer';
import { CommonIcon, GenericIcon } from '../types';
import Icon from '../Icon';

describe('Icon component', () => {
  const genericIcon = GenericIcon.HOME;
  const commonIcon = CommonIcon.ADD;

  describe('Generic Category', () => {
    it('icon component with generic category home with default props', () => {
      render(<Icon category="generic" icon={genericIcon} />);

      const icon = screen.getByTestId('icon-generic-home');
      expect(icon).toBeDefined();

      // Snapshot testing
      const componentTree = renderer
        .create(<Icon category="generic" icon={genericIcon} />)
        .toJSON();
      expect(componentTree).toMatchSnapshot();
    });

    it('Home icon with outline variant', () => {
      render(<Icon category="generic" icon={genericIcon} variant="outlined" />);

      const icon = screen.getByTestId('icon-generic-home');
      expect(icon).toBeDefined();

      // Snapshot testing
      const componentTree = renderer
        .create(<Icon category="generic" icon={genericIcon} variant="outlined" />)
        .toJSON();
      expect(componentTree).toMatchSnapshot();
    });

    it('Home icon with filled variant', () => {
      render(<Icon category="generic" icon={genericIcon} variant="filled" />);
      const icon = screen.getByTestId('icon-generic-home');
      expect(icon).toBeDefined();

      // Snapshot testing
      const componentTree = renderer
        .create(<Icon category="generic" icon={genericIcon} variant="filled" />)
        .toJSON();
      expect(componentTree).toMatchSnapshot();
    });

    it('Home icon with small size', () => {
      render(<Icon category="generic" icon={genericIcon} size="small" />);
      const icon = screen.getByTestId('icon-generic-home');
      expect(icon).toBeDefined();

      // Snapshot testing
      const componentTree = renderer
        .create(<Icon category="generic" icon={genericIcon} size="small" />)
        .toJSON();
      expect(componentTree).toMatchSnapshot();
    });

    it('Home icon with medium size', () => {
      render(<Icon category="generic" icon={genericIcon} size="medium" />);
      const icon = screen.getByTestId('icon-generic-home');
      expect(icon).toBeDefined();

      // Snapshot testing
      const componentTree = renderer
        .create(<Icon category="generic" icon={genericIcon} size="medium" />)
        .toJSON();
      expect(componentTree).toMatchSnapshot();
    });

    it('Home icon with large size', () => {
      render(<Icon category="generic" icon={genericIcon} size="large" />);
      const icon = screen.getByTestId('icon-generic-home');
      expect(icon).toBeDefined();

      // Snapshot testing
      const componentTree = renderer
        .create(<Icon category="generic" icon={genericIcon} size="large" />)
        .toJSON();
      expect(componentTree).toMatchSnapshot();
    });

    it('Home icon with primary color', () => {
      render(<Icon category="generic" icon={genericIcon} color="primary" />);
      const icon = screen.getByTestId('icon-generic-home');
      expect(icon).toBeDefined();

      // Snapshot testing
      const componentTree = renderer
        .create(<Icon category="generic" icon={genericIcon} color="primary" />)
        .toJSON();
      expect(componentTree).toMatchSnapshot();
    });

    it('Home icon with secondary color', () => {
      render(<Icon category="generic" icon={genericIcon} color="secondary" />);
      const icon = screen.getByTestId('icon-generic-home');
      expect(icon).toBeDefined();

      // Snapshot testing
      const componentTree = renderer
        .create(<Icon category="generic" icon={genericIcon} color="secondary" />)
        .toJSON();
      expect(componentTree).toMatchSnapshot();
    });

    it('Home icon with tertiary color', () => {
      render(<Icon category="generic" icon={genericIcon} color="tertiary" />);
      const icon = screen.getByTestId('icon-generic-home');
      expect(icon).toBeDefined();

      // Snapshot testing
      const componentTree = renderer
        .create(<Icon category="generic" icon={genericIcon} color="tertiary" />)
        .toJSON();
      expect(componentTree).toMatchSnapshot();
    });
  });

  describe('Common Category', () => {
    it('Add icon with default props', () => {
      render(<Icon category="common" icon={commonIcon} />);
      const icon = screen.getByTestId('icon-common-add');
      expect(icon).toBeDefined();

      // Snapshot testing
      const componentTree = renderer.create(<Icon category="common" icon={commonIcon} />).toJSON();
      expect(componentTree).toMatchSnapshot();
    });

    it('Add icon with small size', () => {
      render(<Icon category="common" icon={commonIcon} size="small" />);
      const icon = screen.getByTestId('icon-common-add');
      expect(icon).toBeDefined();

      // Snapshot testing
      const componentTree = renderer
        .create(<Icon category="common" icon={commonIcon} size="small" />)
        .toJSON();
      expect(componentTree).toMatchSnapshot();
    });

    it('Add icon with medium size', () => {
      render(<Icon category="common" icon={commonIcon} size="medium" />);
      const icon = screen.getByTestId('icon-common-add');
      expect(icon).toBeDefined();

      // Snapshot testing
      const componentTree = renderer
        .create(<Icon category="common" icon={commonIcon} size="medium" />)
        .toJSON();
      expect(componentTree).toMatchSnapshot();
    });

    it('Add icon with large size', () => {
      render(<Icon category="common" icon={commonIcon} size="large" />);
      const icon = screen.getByTestId('icon-common-add');
      expect(icon).toBeDefined();

      // Snapshot testing
      const componentTree = renderer
        .create(<Icon category="common" icon={commonIcon} size="large" />)
        .toJSON();
      expect(componentTree).toMatchSnapshot();
    });

    it('Add icon with primary color', () => {
      render(<Icon category="common" icon={commonIcon} color="primary" />);
      const icon = screen.getByTestId('icon-common-add');
      expect(icon).toBeDefined();

      // Snapshot testing
      const componentTree = renderer
        .create(<Icon category="common" icon={commonIcon} color="primary" />)
        .toJSON();
      expect(componentTree).toMatchSnapshot();
    });

    it('Add icon with secondary color', () => {
      render(<Icon category="common" icon={commonIcon} color="secondary" />);
      const icon = screen.getByTestId('icon-common-add');
      expect(icon).toBeDefined();

      // Snapshot testing
      const componentTree = renderer
        .create(<Icon category="common" icon={commonIcon} color="secondary" />)
        .toJSON();
      expect(componentTree).toMatchSnapshot();
    });

    it('Add icon with tertiary color', () => {
      render(<Icon category="common" icon={commonIcon} color="tertiary" />);
      const icon = screen.getByTestId('icon-common-add');
      expect(icon).toBeDefined();

      // Snapshot testing
      const componentTree = renderer
        .create(<Icon category="common" icon={commonIcon} color="tertiary" />)
        .toJSON();
      expect(componentTree).toMatchSnapshot();
    });
  });
});
