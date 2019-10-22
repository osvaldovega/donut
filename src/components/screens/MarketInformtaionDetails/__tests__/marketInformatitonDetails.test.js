import React from 'react';
import renderer from 'react-test-renderer';
import MarketInformtaionDetailsScreen from '../index';

describe('<MarketInformtaionDetailsScreen />', () => {

  const props ={
    navigation: {
      getParam: k => k,
    },
  };

  it('renders correctly', () => {
    const tree = renderer.create(<MarketInformtaionDetailsScreen {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
