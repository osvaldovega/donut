import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: Colors.screenBackground,
    color: Colors.white,
  },
  imageContainer: {
    width: '100%',
    height: '60%',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  donutImage: {
    width: '80%',
    height: '80%',
  },
  textContainer: {
    width: '100%',
    height: '40%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  content: {
    width: '100%',
    padding: 30,
    textAlign: 'justify',
    color: Colors.prestigeBlue,
    fontFamily: 'montserrat',
  }
});

export default styles;
