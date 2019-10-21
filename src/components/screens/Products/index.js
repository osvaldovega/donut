import React, { useState, useEffect } from 'react';
import { SafeAreaView, FlatList, ScrollView } from 'react-native';
import Loader from '../../shared/Loader';
import CardItem from '../../shared/CardItem';
import Error from '../../shared/Error';
import api from '../../../services/coinbase/api';
import styles from './styles';

const ProductsScreen = ({ navigation }) => {
  const [prodcuts, setProducts] = useState({ data: [], error: false });
  const [isLoading, setIsLoading] = useState(true);

  const getCoinbaseProducts = async () => {
    try {
      const response = await api.getProducts();
      setProducts({ data: response.data, error: false });
      setIsLoading(false);
    } catch (error) {
      setProducts({ error: true, data: [] });
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCoinbaseProducts();
  }, []);

  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView style={styles.wrapper} contentContainerStyle={styles.wrapper}>
        { isLoading && <Loader /> }
        { !isLoading && prodcuts.error && <Error /> }
        {
          prodcuts.data.length && !prodcuts.error
            ? (
              <FlatList
                data={prodcuts.data}
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

export default ProductsScreen;
