import React from 'react';
import renderer from 'react-test-renderer';
import CardStats from '../index';

describe('<CardStats />', () => {

  it('renders correctly', () => {
    const tree = renderer.create(<CardStats />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
