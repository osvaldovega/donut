import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const Error = () => (
  <View style={[styles.wrapper]}>
    <Text style={[styles.content]}>We had a problem proccesing your request</Text>
    <Text style={[styles.content]}>Please check again later!!!</Text>
  </View>
);

export default Error;
