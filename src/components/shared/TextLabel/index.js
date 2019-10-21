import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const TextLabel = ({ content, textStyle, containerStyle }) => (
  <View style={[styles.wrapper, containerStyle]}>
    <Text style={[styles.content, textStyle]}>{content}</Text>
  </View>
);

TextLabel.defaultProps = {
  containerStyle: '',
  textStyle: '',
  title: '',
};

export default TextLabel;
