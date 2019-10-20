import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

const HomeScreen = () => (
  <View style={styles.wrapper}>
    <View style={styles.imageContainer}>
      <Image
        style={styles.donutImage}
        resizeMode={'contain'}
        source={require('../../../assets/images/donut.png')}
      />
    </View>

    <View style={styles.textContainer}>
      <Text style={styles.content}>
        Donut introduces the flair and relatability of pop culture to a seemingly boring, 
        traditional investment culture. Their platform is aimed at everyone who wants to better 
        understand the complicated market of digital dough and blockchain technologies. From baking 
        bitcoins to filling cremes de crypto, their fun approach to digital asset portfolios 
        makes investing your hard earned income a lot easier.
      </Text>
    </View>
  </View>
);

export default HomeScreen;
