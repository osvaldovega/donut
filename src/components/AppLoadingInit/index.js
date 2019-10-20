import React, { useState } from 'react';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

const loadResourcesAsync = async () => {
  await Promise.all([
    Asset.loadAsync([
      require('../../../assets/images/donut.png'),
      require('../../../assets/images/loader.gif'),
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      'montserrat': require('../../../assets/fonts/Montserrat-Regular.ttf'),
      'montserrat-light': require('../../../assets/fonts/Montserrat-Light.ttf'),
    }),
  ]);
};

const handleLoadingError = (error) => {
  console.warn(error);
};

const AppLoadingInit = ({ setLoadingComplete }) => (
  <AppLoading
    startAsync={loadResourcesAsync}
    onError={handleLoadingError}
    onFinish={() => setLoadingComplete(true)}
  />
);

export default AppLoadingInit;
