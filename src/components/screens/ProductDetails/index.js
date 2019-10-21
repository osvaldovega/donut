import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, View, Text } from 'react-native';
import api from '../../../services/coinbase/api';
import Loader from '../../shared/Loader';
import CardStats from '../../shared/CardStats';
import Error from '../../shared/Error';
import styles from './styles';

const ProductDetailsScreen = ({ navigation }) => {
  const [productDetails, setProductDetails] = useState({});
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  const productId = navigation.getParam('itemId', '0');

  const getProductDetails = async () => {
    try {
      const response = await api.getProductStats24Hrs(productId);
      setProductDetails({ id: productId, ...response.data });
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProductDetails();
  }, []);

  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView style={styles.wrapper} contentContainerStyle={styles.wrapper}>
        <View style={styles.container}>
          { isLoading && <Loader /> }
          { !isLoading && isError && <Error /> }
          { !isLoading && !isError && <CardStats {...productDetails }/> }
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetailsScreen;
