import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import api from '../../services/coinbase/api';
import styles from './styles';

const ProductDetailsScreen = ({ navigation }) => {
  const [productDetails, setProductDetails] = useState({});

  useEffect(() => {
    const productId = navigation.getParam('itemId', '0');
    const getProductDetails = async () => {
      const response = await api.getProductStats24Hrs(productId);
      setProductDetails(response.data);
    };

    getProductDetails();
  }, []);

  return (
    <View style={styles.wrapper}>
      <Text style={styles.mytext}>high: {productDetails.high}</Text>
      <Text style={styles.mytext}>last: {productDetails.last}</Text>
      <Text style={styles.mytext}>low: {productDetails.low}</Text>
      <Text style={styles.mytext}>open: {productDetails.open}</Text>
      <Text style={styles.mytext}>volume: {productDetails.volume}</Text>
      <Text style={styles.mytext}>volume_30day: {productDetails.volume_30day}</Text>
    </View>
  );
};

export default ProductDetailsScreen;
