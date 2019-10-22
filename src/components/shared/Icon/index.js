import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../../constants/Colors';

const Icon = ({ name, size, style, isFocus }) => {
  return (
    <Ionicons
      name={name}
      size={size}
      style={style}
      color={isFocus ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  );
};

Icon.defaultProps = {
  isFocus: false,
  name: 'ios-wallet',
  size: 26,
  style: '',
};

export default Icon;
