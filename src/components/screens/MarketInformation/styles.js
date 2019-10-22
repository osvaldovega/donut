import { StyleSheet } from 'react-native';
import Colors from '../../../constants/Colors';

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  wrapper: {
    flex: 1,
    width: '100%',
    height: '100%',
    display: 'flex',
    backgroundColor: Colors.screenBackground,
    paddingLeft: 5,
    paddingRight: 5,
  },
  item: {
    color: Colors.white,
  },
  flatListRow: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingTop: 15,
  }
});

export default styles;
