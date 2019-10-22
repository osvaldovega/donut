import React from 'react';
import renderer from 'react-test-renderer';
import MarketInformtaionScreen from '../index';

describe('<MarketInformtaionScreen />', () => {

  it('renders correctly', () => {
    const tree = renderer.create(<MarketInformtaionScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
