import React from 'react';
import renderer from 'react-test-renderer';
import { Text } from 'react-native';
import TextHeader from '../index';

describe('<TextHeader />', () => {

  const setup = (props = null) =>  {
    return props
    ? renderer.create(<TextHeader {...props} />)
    : renderer.create(<TextHeader />)
  };

  it('renders correctly', () => {
    const instance = setup();
    const tree = instance.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with a prop value', () => {
    const newProps = { content: 'CoinBase' };
    const instance = setup(newProps);
    const textIns = instance.root.findByType(Text);
    expect(textIns.props.children).toBe(newProps.content);
  });
});
