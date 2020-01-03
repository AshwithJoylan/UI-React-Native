import React from 'react';
import {Text, StyleSheet, View, StatusBar, Dimensions} from 'react-native';
import {withNavigation} from 'react-navigation';
import {NavProp} from './nav';
import {Highlight, Tap} from './utility';
import Animated from 'react-native-reanimated';
import Metrics from './metrics';
const {height} = Dimensions.get('window');

// Component
const Test = ({navigation}: {navigation: NavProp}) => {
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="rgba(0,0,0,0.05)" />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    height: height + Metrics.headerHeight,
    width: Metrics.width,
    backgroundColor: 'red' ,
  },
  button: {
    width: 250,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default withNavigation(Test);
