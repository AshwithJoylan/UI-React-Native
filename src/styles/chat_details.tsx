import {StyleSheet} from 'react-native';
import Metrics from '../metrics';
import {ChatUiColors as Colors} from '../colors';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    alignSelf: 'stretch',
    paddingTop: Metrics.barMargin && Metrics.barMargin + 10,
    paddingBottom: 10,
    flexDirection: 'row',
  },
  headerIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingLeft: 10,
    height: 50,
    flexDirection: 'row',
  },
  thumb: {
    width: 50,
    height: 50,
    borderRadius: 15,
  },
  position: {
    fontSize: 16,
    color: Colors.lighterText,
  },
  sender: {
    color: 'black',
    fontSize: 16,
    fontWeight: Metrics.isAndroid ? 'bold' : '600',
  },
  info: {
    height: '100%',
    marginLeft: 20,
    justifyContent: 'space-evenly',
  },
  contentContainer: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    paddingBottom: 70,
  },
  separator: {
    height: 15,
  },
  inputContainer: {
    alignSelf: 'stretch',
    marginHorizontal: 20,
    height: 60,
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 3.84,
    elevation: 5,
    overflow: 'hidden',
    backgroundColor: '#F2F2F2',
    flexDirection: 'row',
  },
  input: {
    color: Colors.lightText,
    paddingLeft: 20,
    fontSize: 16,
  },
  button: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
