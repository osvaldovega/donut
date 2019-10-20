import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const CardItem = ({ id, display_name, base_currency }) => (
  <View style={styles.wrapper}>
    <Text style={styles.label}>{display_name}</Text>
    <Text style={styles.label}>{id}</Text>
    <Text style={styles.label}>{base_currency}</Text>
  </View>
);

export default CardItem;
