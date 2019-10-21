import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

const HomeScreen = () => (
  <View style={styles.wrapper}>
    <View style={styles.imageContainer}>
      <Image
        style={styles.donutImage}
        resizeMode={'contain'}
        source={require('../../../../assets/images/donut.png')}
      />
    </View>

    <View style={styles.textContainer}>
      <Text style={styles.content}>
        This is a simple app, to check the Coinbase Market Information.
      </Text>
    </View>
  </View>
);

export default HomeScreen;
