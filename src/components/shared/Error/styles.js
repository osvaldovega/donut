import { StyleSheet } from 'react-native';
import Colors from '../../../constants/Colors';

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  content: {
    fontSize: 20,
    color: Colors.pink,
    fontFamily: 'montserrat',
    fontWeight: '600',
    padding: 10,
  },
});

export default styles;
