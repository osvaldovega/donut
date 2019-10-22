import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Systems from '../../constants/OperativeSystems';
import TabMenuItems from '../../constants/TabMenuItems';
import Icon from '../shared/Icon';
import HomeScreen from '../screens/Home';
import MarketInformtaionScreen from '../screens/MarketInformation';
import MarketInformtaionDetailsScreen from '../screens/MarketInformtaionDetails';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const getNavigationOptions = (labelName, iosIconName, androidIconNamee) => ({
  navigationOptions: {
    tabBarLabel: labelName,
    tabBarIcon: ({ focused }) => (
      <Icon
        isFocus={focused}
        name={Platform.OS === Systems.IOS ? iosIconName : androidIconNamee}
      />
    ),
  },
});

// ============================================= //
//                    HOME 
// ============================================= //
const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    ...config,
    ...getNavigationOptions(
      TabMenuItems.home.labelName,
      TabMenuItems.home.iosIcon,
      TabMenuItems.home.androidIcon
    ),
    path: '',
    headerMode: 'none',
  }
);


// ============================================= //
//              MARKET INFORMATION 
// ============================================= //
const MarketInformationStack = createStackNavigator(
  {
    MarketInformation: {
      screen: MarketInformtaionScreen,
      navigationOptions: {
        title: 'Market Information',
      },
    },
    MarketInformationDetails: {
      screen: MarketInformtaionDetailsScreen,
      navigationOptions: {
        title: '24hr Stats',
      },
    },
  },
  {
    ...config,
    ...getNavigationOptions(
      TabMenuItems.products.labelName,
      TabMenuItems.products.iosIcon,
      TabMenuItems.products.androidIcon,
    ),
    path: '',
  },
);


// ============================================= //
//                 TAB NAVIGATOR 
// ============================================= //
const tabNavigator = createBottomTabNavigator(
  {
    HomeStack,
    MarketInformationStack,
  },
  {
    tabBarOptions: {
      style: {
        height: 40,
      },
      tabStyle: {
        height: 40,
        marginTop: 10,
      },
    },
    path: '',
  },
);

export default tabNavigator;
