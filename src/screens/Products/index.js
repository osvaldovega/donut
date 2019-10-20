import React, { useState, useEffect } from 'react';
import {Text, SafeAreaView, FlatList, ScrollView } from 'react-native';
import CardItem from '../../components/CardItem';
import api from '../../services/coinbase/api';
import styles from './styles';

const ProductsScreen = () => {
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
      <ScrollView style={styles.wrapper}>
        {
          prodcuts.data.length && !prodcuts.error
          ? (
            <FlatList
              data={prodcuts.data}
              renderItem={({ item }) => <CardItem {...item} />}
              keyExtractor={item => item.id}
              contentContainerStyle = {{ width: '100%',  }}
            />
          )
          : <Text style={styles.item}>Loading</Text>
        }
      </ScrollView>
    </SafeAreaView>
  );
};

ProductsScreen.navigationOptions = {
  title: 'Coinbase',
};

export default ProductsScreen;
