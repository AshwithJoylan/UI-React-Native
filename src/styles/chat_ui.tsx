import {StyleSheet} from 'react-native';
import {ChatUiColors as Colors} from '../colors';
import Metrics from '../metrics';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    left: 10,
  },
  topContainer: {
    alignSelf: 'stretch',
    height: 60,
    borderRadius: 20,
    backgroundColor: Colors.lightBlue,
    marginHorizontal: 30,
    marginTop: 30,
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listItem: {
    alignSelf: 'stretch',
  },
  insideList: {
    alignSelf: 'stretch',
    paddingHorizontal: 30,
    paddingBottom: 20,
    paddingTop: 30,
  },
  messageText: {
    color: Colors.lightText,
  },
  listContent: {
    paddingTop: 20,
  },
  inner: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  innerSelf: {
    marginTop: 20,
    height: 50,
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
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
  time: {
    fontSize: 12,
    color: 'black',
    fontWeight: Metrics.isAndroid ? 'bold' : '600',
  },
  separator: {
    alignSelf: 'stretch',
    height: 0.5,
    opacity: 0.6,
    backgroundColor: Colors.lighterText,
    marginHorizontal: 30,
  },
});
