import {StyleSheet} from 'react-native';
import {ParColors as Colors} from '../colors';
import Metrics from '../metrics';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondary,
  },
  menuImage: {
    flex: 1,
    width: undefined,
    height: undefined
  },
  top: {
    backgroundColor: Colors.primary,
    width: '100%',
    height: Metrics.height * 0.22,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: Metrics.barHeight + 20,
  },
  menu: {
    width: 30,
    height: 30,
  },
  logo: {
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  logoImage: {
    height: 40,
  },
  profile: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
  },
  bottom: {
    position: 'absolute',
    bottom: 0,
    top: Metrics.barHeight + 90,
    left: 0,
    right: 0,
  },
  tab: {
    flex: 1,
    borderRadius: 40,
    overflow: 'hidden',
    backgroundColor: 'white',
  },
  tabBar: {
    alignSelf: 'stretch',
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginTop: 20,
    alignItems: 'center',
    flexDirection: 'row',
  },
  friends: {
    fontSize: 24,
    fontWeight: '700',
  },
  recent: {
    fontSize: 24,
    marginLeft: 20,
    fontWeight: '700',
  },
  search: {
    flex: 1,
    alignItems: 'flex-end',
  },
  bottomContent: {
    width: '100%',
    height: 80,
    marginBottom: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttons: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: Colors.primary,
    fontSize: 16,
    fontWeight: 'bold',
  },
  separator: {
    width: 0.4,
    height: '40%',
    backgroundColor: Colors.primary,
  },
  addFriend: {
    left: 0,
    right: 0,
    position: 'absolute',
    marginHorizontal: 30,
    bottom: 30,
    backgroundColor: Colors.primary,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  list: {
    flex: 1,
  },
  addFriendText: {
    color: Colors.secondary,
    fontSize: 16,
    fontWeight: 'bold',
  },
  item: {
    alignSelf: 'stretch',
    height: 100,
    paddingHorizontal: 30,
    alignItems: 'center',
    flexDirection: 'row',
  },
  contentContainer: {
    paddingBottom: 80,
  },
  itemContent: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  itemImage: {
    width: 60,
    borderRadius: 60,
    height: 60,
    overflow: 'hidden',
  },
  itemName: {
    marginLeft: 20,
    fontSize: 16,
    color: Colors.secondary,
  },
  itemButton: {
    width: 60,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EFF0F4',
  },
  itemButtonText: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.secondary,
  },
});
