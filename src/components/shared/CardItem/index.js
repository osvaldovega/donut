import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import TextHeader from '../TextHeader';
import TextLabel from '../TextLabel';
import TextContent from '../TextContent';
import Button from '../Button';
import styles from './styles';

const CardItem = ({
  id,
  base_currency,
  quote_currency,
  base_min_size,
  base_max_size,
  min_market_funds,
  max_market_funds,
  quote_increment,
  status,
  onPressFn,
}) => (
  <View style={styles.wrapper}>
    <View style={styles.titleContainer}>
      <TextHeader content={id} />
    </View>

    <View style={styles.detailsContainer}>
      <View style={styles.detailsColumn}>
        <TextLabel content={'Base'} />
        <TextContent content={base_currency} />
      </View>
      <View style={[styles.detailsColumn, styles.columnDivider]}>
        <TextLabel content={'Quote'} />
        <TextContent content={quote_currency} />
      </View>
    </View>

    <View style={styles.detailsContainer}>
      <View style={styles.detailsColumn}>
        <TextLabel content={'Base Order Min'} />
        <TextContent content={base_min_size} />
      </View>
      <View style={[styles.detailsColumn, styles.columnDivider]}>
        <TextLabel content={'Base Order Max'} />
        <TextContent content={base_max_size} />
      </View>
    </View>

    <View style={styles.detailsContainer}>
      <View style={styles.detailsColumn}>
        <TextLabel content={'Quote Order Min'} />
        <TextContent content={min_market_funds} />
      </View>
      <View style={[styles.detailsColumn, styles.columnDivider]}>
        <TextLabel content={'Quote Order Max'} />
        <TextContent content={max_market_funds} />
      </View>
    </View>

    <View style={styles.detailsContainer}>
      <View style={styles.detailsColumn}>
        <TextLabel content={'Tik Size'} />
        <TextContent content={quote_increment} />
      </View>
      <View style={[styles.detailsColumn, styles.columnDivider]}>
        <TextLabel content={'Status'} />
        <TextContent content={status} />
      </View>
    </View>

    <Button text={'24hr Stats'} onPressFn={onPressFn}/>
  </View>
);

CardItem.defaultProps = {
  base_currency: '',
  base_max_size: 0,
  base_min_size: 0,
  id: 0,
  max_market_funds: 0,
  min_market_funds: 0,
  onPressFn: () => {},
  quote_currency: '',
  quote_increment: 0,
  status: '',
}

export default CardItem;
