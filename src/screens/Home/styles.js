import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F4C3C2',
    color: '#fff',
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
    color: '#2d3436',
  }
});

export default styles;
