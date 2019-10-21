import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const TextHeader = ({ title, textStyle, containerStyle }) => (
  <View style={[styles.wrapper, containerStyle]}>
    <Text style={[styles.title, textStyle]}>{title}</Text>
  </View>
);

TextHeader.defaultProps = {
  containerStyle: '',
  textStyle: '',
  title: '',
};

export default TextHeader;
