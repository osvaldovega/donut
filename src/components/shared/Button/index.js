import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

const Button = ({
  styleContainer,
  styleText,
  text,
  onPressFn,
}) => (
    <TouchableOpacity style={[styles.wrapper, styleContainer]} onPress={onPressFn}>
      <Text style={[styles.text, styleText]}>{text}</Text>
    </TouchableOpacity>
);

Button.defaultProps = {
  styleContainer: '',
  styleText: '',
  text: '',
  onPressFn: () => {},
};

export default Button;
