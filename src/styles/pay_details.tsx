import {StyleSheet} from 'react-native';
import {ParColors as Colors} from '../colors';
import Metrics from '../metrics';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondary,
  },
  top: {
    flex: 3.5,
    paddingTop: Metrics.barHeight + 5,
    alignItems: 'center',
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    backgroundColor: Colors.primary,
  },
  headerIcon: {
    position: 'absolute',
    top: Metrics.barHeight + 5,
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    alignItems: 'center',
  },
  titleText: {
    color: Colors.secondary,
    fontSize: 14,
    fontWeight: '600',
  },
  number: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  symbols: {
    width: Metrics.width * 0.6,
    height: 40,
    marginTop: 10,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  symbolText: {
    color: '#C7A79D',
    fontSize: 30,
    fontWeight: 'bold',
  },
  money: {
    fontSize: 100,
    fontWeight: '600',
    fontFamily: Metrics.isAndroid ? 'monospace' : 'Avenir',
    color: Colors.secondary,
  },
  dots: {
    width: 100,
    height: 15,
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#C7A79D',
  },
  activeDot: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    backgroundColor: Colors.secondary,
  },
  bottom: {
    flex: 6.5,
    paddingVertical: 20,
  },
  numberButtons: {
    flex: 1,
    flexDirection: 'row',
  },
  numberButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  highlight: {
    width: Metrics.width * 0.26,
    height: Metrics.width * 0.26,
    borderRadius: (Metrics.width * 0.26) / 2,
    borderWidth: 1,
    borderColor: Colors.primary,
  },
  highlightLight: {
    width: Metrics.width * 0.26,
    height: Metrics.width * 0.26,
    borderRadius: (Metrics.width * 0.26) / 2,
  },
  highlighText: {
    fontSize: Metrics.width * 0.26 - 70,
    color: Colors.primary,
  },
});
