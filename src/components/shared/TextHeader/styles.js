import { StyleSheet } from 'react-native';
import Colors from '../../../constants/Colors';

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'montserrat',
    fontSize: 18,
    fontWeight: '600',
    color: Colors.skirretGreen,
  },
});

export default styles;
