import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import MainTabNavigator from '../components/shared/MainTabBar';

export default createAppContainer(
  createSwitchNavigator({
    Main: MainTabNavigator,
  })
);
