import React, {useEffect, createRef} from 'react';
import {View, StyleSheet, Animated} from 'react-native';
import {Svg, Path, LinearGradient, Defs, Stop} from 'react-native-svg';
import {SafeAreaView} from 'react-navigation';
import Metrics from './metrics';
import * as path from 'svg-path-properties';
import {scaleTime, scaleLinear} from 'd3-scale';
import * as shape from 'd3-shape';
const height = 200;
const {width} = Metrics;
const data: Array<{x: Date; y: number}> = [
  {x: new Date(2018, 9, 1), y: 0},
  {x: new Date(2018, 9, 16), y: 0},
  {x: new Date(2018, 9, 17), y: 200},
  {x: new Date(2018, 10, 1), y: 200},
  {x: new Date(2018, 10, 2), y: 300},
  {x: new Date(2018, 10, 5), y: 300},
];
const radius = 10;
const cursor = createRef()
const scaleX = scaleTime()
  .domain([new Date(2018, 9, 1), new Date(2018, 10, 5)])
  .range([0, width]);
const scaleY = scaleLinear()
  .domain([0, 300])
  .range([height, 0]);

const line = shape
  .line()
  .x(d => scaleX(d.x))
  .y(d => scaleY(d.y))
  .curve(shape.curveBasis)(data);

const properties = path.svgPathProperties(line);

const lineLength = properties.getTotalLength();
const Test = () => {
  const x = new Animated.Value(0);
  const moveCursor = (val: number) => {
    const {x: xx, y} = properties.getPointAtLength(lineLength - val);
    cursor.current.setNativeProps({
      top: y - radius,
      left: xx - radius,
    });
  };

  useEffect(() => {
    x.addListener(({value}) => moveCursor(value));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Svg {...{width, height}}>
          <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="gradient">
              <Stop stopColor="#CDE3F8" offset="0%" />
              <Stop stopColor="#eef6fd" offset="80%" />
              <Stop stopColor="#FEFFFF" offset="100%" />
            </LinearGradient>
          </Defs>
          <Path d={line} fill="transparent" stroke="#367be2" strokeWidth={5} />
          <Path
            d={`${line} L ${width} ${height} L 0 ${height}`}
            fill="url(#gradient)"
          />
          <View ref={cursor} style={styles.cursor} />
        </Svg>
        <Animated.ScrollView
          style={StyleSheet.absoluteFill}
          contentContainerStyle={{width: lineLength * 2}}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          bounces={false}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {x},
                },
              },
            ],
            {useNativeDriver: true},
          )}
          horizontal
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  inner: {
    marginTop: 60,
    height,
    width,
  },
  cursor: {
    width: radius * 2,
    height: radius * 2,
    borderRadius: radius,
    borderColor: '#367be2',
    borderWidth: 3,
    backgroundColor: 'white',
  },
});

export default Test;
