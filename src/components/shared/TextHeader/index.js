import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const TextHeader = ({ content, textStyle, containerStyle }) => (
  <View style={[styles.wrapper, containerStyle]}>
    <Text style={[styles.title, textStyle]}>{content}</Text>
  </View>
);

TextHeader.defaultProps = {
  containerStyle: '',
  textStyle: '',
  content: '',
};

export default TextHeader;
