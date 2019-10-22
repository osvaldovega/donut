import React from 'react';
import renderer from 'react-test-renderer';
import { Text } from 'react-native';
import Button from '../index';

describe('<Button />', () => {

  const setup = (props = null) =>  {
    return props
    ? renderer.create(<Button {...props} />)
    : renderer.create(<Button />)
  };

  it('renders correctly', () => {
    const instance = setup();
    const tree = instance.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with a prop value', () => {
    const newProps = { text: 'Click Me' };
    const instance = setup(newProps);
    const textIns = instance.root.findByType(Text);
    expect(textIns.props.children).toBe(newProps.text);
  });
});
