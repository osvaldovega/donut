import React from 'react';
import renderer from 'react-test-renderer';
import { Text } from 'react-native';
import TextContent from '../index';

describe('<TextContent />', () => {

  const setup = (props = null) =>  {
    return props
    ? renderer.create(<TextContent {...props} />)
    : renderer.create(<TextContent />)
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


