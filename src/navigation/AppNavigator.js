import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import MainTabNavigator from '../components/MainTabBar';

export default createAppContainer(
  createSwitchNavigator({
    Main: MainTabNavigator,
  })
);
