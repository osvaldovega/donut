import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const TextContent = ({ content, textStyle, containerStyle }) => (
  <View style={[styles.wrapper, containerStyle]}>
    <Text style={[styles.content, textStyle]}>{content}</Text>
  </View>
);

TextContent.defaultProps = {
  containerStyle: '',
  textStyle: '',
  content: '',
};

export default TextContent;
