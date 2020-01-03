import {Platform, Dimensions, StatusBar} from 'react-native';

const stHeight = StatusBar.currentHeight || 56;
const isAndroid = Platform.OS === 'android';
const {width, height} = Dimensions.get('window');
const barHeight = isAndroid ? stHeight : height >= 812 ? 44 : 20;
const headerHeight = isAndroid ? 86 : height >= 812 ? 88 : 60;
const borderWidth = 0.4;
const barMargin =
  Platform.OS === 'ios' ? (height >= 812 ? 44 : 20) : StatusBar.currentHeight;

const Metrics = {
  isAndroid,
  width,
  height: isAndroid ? height + headerHeight : height,
  barHeight,
  headerHeight,
  borderWidth,
  barMargin,
};

export default Metrics;
