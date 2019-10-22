import React from 'react';
import renderer from 'react-test-renderer';
import CardItem from '../index';

describe('<CardItem />', () => {

  it('renders correctly', () => {
    const tree = renderer.create(<CardItem />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
