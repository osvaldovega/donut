import { StyleSheet } from 'react-native';
import Colors from '../../../constants/Colors';

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    fontSize: 12,
    color: Colors.goldenSand,
    fontFamily: 'montserrat',
    fontWeight: '600',
    textTransform: 'uppercase',
  },
});

export default styles;
