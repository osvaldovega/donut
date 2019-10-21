import React from 'react';
import { View, Image } from 'react-native';
import styles from './styles';

const Loader = () => (
  <View style={styles.wrapper}>
    <View style={styles.animationContainer}>
      <Image source={require('../../../../assets/images/loader.gif')} style={styles.animation} />
    </View>
  </View>
);

export default Loader;
