import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  wrapper: {
    width: '45%',
    height: 100,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: Colors.prestigeBlue,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: Colors.peace,
    padding: 5,
  },
  titleContainer: {
    width: '100%',
    height: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: Colors.antiFlashWhite,
    fontWeight: '600',
    fontFamily: 'montserrat',
  },
  detailsContainer: {
    width: '100%',
    height: '50%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderTopColor: Colors.clearChill,
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
    borderLeftColor: Colors.clearChill,
  },
  label: {
    fontSize: 12,
    color: Colors.goldenSand,
    fontFamily: 'montserrat',
  },
  content: {
    fontSize: 12,
    color: Colors.antiFlashWhite,
    fontFamily: 'montserrat-light',
  }
});

export default styles;
