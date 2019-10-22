import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import AppNavigator from './navigation/AppNavigator';
import AppLoadingInit from './components/shared/AppLoadingInit';
import OS from './constants/OperativeSystems';

const Main = (props) => {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return <AppLoadingInit setLoadingComplete={setLoadingComplete} />;
  }

  return (
    <View style={styles.wrapper}>
      {
        Platform.OS === OS.IOS && <StatusBar barStyle="default" />
      }
      <AppNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});

export default Main;
