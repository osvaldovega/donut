import React from 'react';
import { View } from 'react-native';
import TextHeader from '../TextHeader';
import TextLabel from '../TextLabel';
import TextContent from '../TextContent';
import styles from './styles';

const CardStats = ({
  high,
  id,
  last,
  low,
  open,
  volume_30day,
  volume,
}) => (
  <View style={styles.wrapper}>
    <View style={styles.titleContainer}>
      <TextHeader title={id} />
    </View>

    <View style={styles.detailsContainer}>
      <View style={styles.detailsColumn}>
        <TextLabel content={'Open'} />
        <TextContent content={open} />
      </View>
      <View style={[styles.detailsColumn, styles.columnDivider]}>
        <TextLabel content={'last'} />
        <TextContent content={last} />
      </View>
    </View>

    <View style={styles.detailsContainer}>
      <View style={styles.detailsColumn}>
        <TextLabel content={'High'} />
        <TextContent content={high} />
      </View>
      <View style={[styles.detailsColumn, styles.columnDivider]}>
        <TextLabel content={'Low'} />
        <TextContent content={low} />
      </View>
    </View>

    <View style={styles.detailsContainer}>
      <View style={styles.detailsColumn}>
        <TextLabel content={'Volume'} />
        <TextContent content={volume} />
      </View>
      <View style={[styles.detailsColumn, styles.columnDivider]}>
        <TextLabel content={'Volumen 30 day'} />
        <TextContent content={volume_30day} />
      </View>
    </View>
  </View>
);

CardStats.defaultProps = {
  hig: 0,
  id: 0,
  last: 0,
  low: 0,
  open: 0,
  volume_30day: 0,
  volume: 0,
}

export default CardStats;
