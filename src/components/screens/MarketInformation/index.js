import React from 'react';
import { SafeAreaView, FlatList, ScrollView } from 'react-native';
import Loader from '../../shared/Loader';
import CardItem from '../../shared/CardItem';
import Error from '../../shared/Error';
import useCoinbaseAPI from '../../hooks/useCoinbaseApi';
import styles from './styles';

const MarketInformtaionScreen = ({ navigation }) => {
  const { data, isError, isLoading } = useCoinbaseAPI('getMarketInformation');

  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView style={styles.wrapper} contentContainerStyle={styles.wrapper}>
        { isLoading && <Loader /> }
        { !isLoading && isError && <Error /> }
        {
          data.length && !isError
            ? (
              <FlatList
                data={data}
                renderItem={({ item }) => (
                  <CardItem {...item} onPressFn={() => {
                    navigation.navigate('MarketInformationDetails', { itemId: item.id });
                  }} />
                )}
                keyExtractor={item => item.id}
              />
            )
            : null
        }
      </ScrollView>
    </SafeAreaView>
  );
};

export default MarketInformtaionScreen;
