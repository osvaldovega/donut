import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const CardItem = ({ id, display_name, base_currency, onPressFn }) => (
  <View style={styles.wrapper} onStartShouldSetResponder={onPressFn}>
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{display_name}</Text>
    </View>

    <View style={styles.detailsContainer}>
      <View style={styles.detailsColumn}>
        <Text style={styles.label}>ID</Text>
        <Text style={styles.content}>{id}</Text>
      </View>
      <View style={[styles.detailsColumn, styles.columnDivider]}>
        <Text style={styles.label}>Currency</Text>
        <Text style={styles.content}>{base_currency}</Text>
      </View>
    </View>
  </View>
);

CardItem.defaultProps = {
  id: 0,
  display_name: '',
  base_currency: '',
  onPressFn: () => {},
}

export default CardItem;
