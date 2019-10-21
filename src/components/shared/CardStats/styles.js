import { StyleSheet } from 'react-native';
import Colors from '../../../constants/Colors';

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: Colors.picoVoid,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: Colors.white,
    padding: 10,
    marginTop: 10,
  },
  titleContainer: {
    width: '100%',
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsContainer: {
    width: '100%',
    height: 55,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderTopColor: Colors.antiFlashWhite,
    borderTopWidth: 1,
  },
  detailsColumn: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  columnDivider: {
    borderLeftWidth: 1,
    borderLeftColor: Colors.antiFlashWhite,
  },
});

export default styles;
