/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, ImageBackground, Text} from 'react-native';
import styles from '../styles/profile1';
import Animated from 'react-native-reanimated';
import Metrics from '../metrics';
interface Props {
  y: Animated.Node<number>;
}

const {interpolate, Extrapolate} = Animated;

const v =
  -Metrics.height +
  (Metrics.height * 0.6 - Metrics.barHeight - (Metrics.isAndroid ? 40 : 30));
  
// Component
const Main = ({y}: Props) => {
  const translateY = interpolate(y, {
    inputRange: [v, 0],
    outputRange: [-130, 0],
    extrapolate: Extrapolate.CLAMP,
  });
  const scale = interpolate(y, {
    inputRange: [v, 0],
    outputRange: [0.4, 1],
    extrapolate: Extrapolate.CLAMP,
  });
  const borderWidth = interpolate(y, {
    inputRange: [v + 40, 0],
    outputRange: [0, 1],
    extrapolate: Extrapolate.CLAMP,
  });

  const ty = interpolate(y, {
    inputRange: [v, 0],
    outputRange: [-120, 1],
    extrapolate: Extrapolate.CLAMP,
  });

  const tOpacity = interpolate(y, {
    inputRange: [v, 0],
    outputRange: [0, 1],
    extrapolate: Extrapolate.CLAMP,
  });

  const RenderFollow = ({
    title,
    num,
    index,
  }: {
    title: string;
    num: number;
    index: number;
  }) => (
    <View
      style={[
        styles.followers,
        index === 0 && {
          // borderRightWidth: 1,
          borderRightColor: 'rgba(0,0,0,0.1)',
        },
      ]}>
      <View style={styles.box}>
        <Text style={styles.followText}>{title}</Text>
      </View>
      <View style={styles.boxContent}>
        <Text style={styles.followText}>{num.toLocaleString('en-EU')}</Text>
      </View>
    </View>
  );
  return (
    <View style={styles.main}>
      <Animated.View
        style={[styles.profileImage, {transform: [{translateY}], borderWidth}]}>
        <Animated.View style={[styles.proImage, {transform: [{scale}]}]}>
          <ImageBackground
            resizeMode="contain"
            style={styles.image}
            source={require('../images/payProfile.jpeg')}
          />
        </Animated.View>
        {/* <Animated.View style={styles.activeIndicator} /> */}
      </Animated.View>
      <Animated.View
        style={{
          transform: [{translateY: ty}],
          opacity: tOpacity,
          ...styles.description,
        }}>
        <Text style={styles.mainName}>King Devis</Text>
        <Text style={styles.mainFrom}>New York, USA</Text>
        <View style={styles.followInfo}>
          <RenderFollow title="Followers" num={100000} index={0} />
          <RenderFollow title="Following" num={8000} index={1} />
        </View>
      </Animated.View>
    </View>
  );
};

export default Main;
