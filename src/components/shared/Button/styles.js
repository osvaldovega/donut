import { StyleSheet } from 'react-native';
import Colors from '../../../constants/Colors';

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 15,
  },
  text: {
    width: 200,
    fontSize: 18,
    fontFamily: 'montserrat',
    fontWeight: '600',
    padding: 5,
    borderRadius: 9,
    overflow: 'hidden',
    backgroundColor: Colors.clearChill,
    color: Colors.antiFlashWhite,
    textAlign: 'center',
  },
});

export default styles;
