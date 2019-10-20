import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Systems from '../../constants/OperativeSystems';
import TabMenuItems from '../../constants/TabMenuItems';
import Icon from '../Icon';
import HomeScreen from '../../screens/Home';
import ProductsScreen from '../../screens/Products';

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
//                    PRODUCTS 
// ============================================= //
const ProductsStack = createStackNavigator(
  {
    Products: ProductsScreen,
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
    ProductsStack,
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
