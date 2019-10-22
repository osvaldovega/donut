import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import Loader from '../../shared/Loader';
import CardStats from '../../shared/CardStats';
import Error from '../../shared/Error';
import useCoinbaseAPI from '../../hooks/useCoinbaseApi';
import styles from './styles';

const MarketInformtaionDetailsScreen = ({ navigation }) => {
  const id = navigation.getParam('itemId', '0');
  const { data, isError, isLoading } = useCoinbaseAPI('getMarketInformationStats', id);
  const stats = { id, ...data };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView style={styles.wrapper} contentContainerStyle={styles.wrapper}>
        <View style={styles.container}>
          { isLoading && <Loader /> }
          { !isLoading && isError && <Error /> }
          { !isLoading && !isError && <CardStats {...stats }/> }
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MarketInformtaionDetailsScreen;
