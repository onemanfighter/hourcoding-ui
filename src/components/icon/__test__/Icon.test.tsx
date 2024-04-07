import React from 'react';
import renderer from 'react-test-renderer';

import Icon from '../Icon';
import { CommonIcon, GenericIcon } from '../types';

const genericIcon = GenericIcon.HOME;
const commonIcon = CommonIcon.ADD;

describe('Icon component', () => {
  describe('Generic Category', () => {
    describe('logical tests', () => {
      // TODO: Add logical tests
    });

    describe('snapshot test', () => {
      it('icon component with generic category home with default props', () => {
        const tree = renderer.create(<Icon category="generic" icon={genericIcon} />).toJSON();
        expect(tree).toMatchSnapshot();
      });

      it('Home icon with outline variant', () => {
        const tree = renderer
          .create(<Icon category="generic" icon={genericIcon} variant="outlined" />)
          .toJSON();
        expect(tree).toMatchSnapshot();
      });

      it('Home icon with filled variant', () => {
        const tree = renderer
          .create(<Icon category="generic" icon={genericIcon} variant="filled" />)
          .toJSON();
        expect(tree).toMatchSnapshot();
      });

      it('Home icon with small size', () => {
        const tree = renderer
          .create(<Icon category="generic" icon={genericIcon} size="small" />)
          .toJSON();
        expect(tree).toMatchSnapshot();
      });

      it('Home icon with medium size', () => {
        const tree = renderer
          .create(<Icon category="generic" icon={genericIcon} size="medium" />)
          .toJSON();
        expect(tree).toMatchSnapshot();
      });

      it('Home icon with large size', () => {
        const tree = renderer
          .create(<Icon category="generic" icon={genericIcon} size="large" />)
          .toJSON();
        expect(tree).toMatchSnapshot();
      });

      it('Home icon with primary color', () => {
        const tree = renderer
          .create(<Icon category="generic" icon={genericIcon} color="primary" />)
          .toJSON();
        expect(tree).toMatchSnapshot();
      });

      it('Home icon with secondary color', () => {
        const tree = renderer
          .create(<Icon category="generic" icon={genericIcon} color="secondary" />)
          .toJSON();
        expect(tree).toMatchSnapshot();
      });

      it('Home icon with tertiary color', () => {
        const tree = renderer
          .create(<Icon category="generic" icon={genericIcon} color="tertiary" />)
          .toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });

  describe('Common Category', () => {
    describe('logical tests', () => {
      // TODO: Add logical tests
    });

    describe('Snapshot tests', () => {
      it('Add icon with default props', () => {
        const tree = renderer.create(<Icon category="common" icon={commonIcon} />).toJSON();
        expect(tree).toMatchSnapshot();
      });

      it('Add icon with small size', () => {
        const tree = renderer
          .create(<Icon category="common" icon={commonIcon} size="small" />)
          .toJSON();
        expect(tree).toMatchSnapshot();
      });

      it('Add icon with medium size', () => {
        const tree = renderer
          .create(<Icon category="common" icon={commonIcon} size="medium" />)
          .toJSON();
        expect(tree).toMatchSnapshot();
      });

      it('Add icon with large size', () => {
        const tree = renderer
          .create(<Icon category="common" icon={commonIcon} size="large" />)
          .toJSON();
        expect(tree).toMatchSnapshot();
      });

      it('Add icon with primary color', () => {
        const tree = renderer
          .create(<Icon category="common" icon={commonIcon} color="primary" />)
          .toJSON();
        expect(tree).toMatchSnapshot();
      });

      it('Add icon with secondary color', () => {
        const tree = renderer
          .create(<Icon category="common" icon={commonIcon} color="secondary" />)
          .toJSON();
        expect(tree).toMatchSnapshot();
      });

      it('Add icon with tertiary color', () => {
        const tree = renderer
          .create(<Icon category="common" icon={commonIcon} color="tertiary" />)
          .toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });
});
