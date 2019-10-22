import React from 'react';
import renderer from 'react-test-renderer';
import Error from '../index';

describe('<Error />', () => {

  const setup = () => renderer.create(<Error />);

  it('renders correctly', () => {
    const tree = setup().toJSON();
    expect(tree).toMatchSnapshot();
  });
});
