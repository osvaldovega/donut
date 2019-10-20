import React, { useState, useEffect } from 'react';
import {Text, SafeAreaView, FlatList, ScrollView } from 'react-native';
import Loader from '../../components/Loader';
import CardItem from '../../components/CardItem';
import api from '../../services/coinbase/api';
import styles from './styles';

const ProductsScreen = ({ navigation }) => {
  const [prodcuts, setProducts] = useState({ data: [], error: false })

  useEffect(() => {
    const getCoinbaseProducts = async () => {
      try {
        const response = await api.getProducts();
        setProducts({ data: response.data, error: false });
      } catch (error) {
        setProducts({ error: true, data: [] });
      }
    }
    getCoinbaseProducts();
  }, []);

  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView style={styles.wrapper} contentContainerStyle={styles.wrapper}>
        {
          prodcuts.data.length && !prodcuts.error
          ? (
            <FlatList
              data={prodcuts.data}
              renderItem={({ item }) => (
                <CardItem {...item} onPressFn={() => navigation.navigate('ProductDetails', { itemId: item.id })} />
              )}
              keyExtractor={item => item.id}
              numColumns={2}
              columnWrapperStyle={styles.flatListRow}
            />
          )
          : <Loader />
        }
      </ScrollView>
    </SafeAreaView>
  );
};

ProductsScreen.navigationOptions = {
  title: 'Coinbase',
};

export default ProductsScreen;
