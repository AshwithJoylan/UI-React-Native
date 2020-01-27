import React from 'react';
import {AreaChart, BarChart} from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import {View, StyleSheet} from 'react-native';

const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80];
const data2 = [
  50,
  10,
  40,
  95,
  -4,
  -24,
  null,
  85,
  undefined,
  0,
  35,
  53,
  -53,
  24,
  50,
  -20,
  -80,
];

const Charts = ({}) => {
  return (
    <View style={styles.container}>
      <AreaChart
        style={{height: 200}}
        data={data}
        contentInset={{top: 30, bottom: 30, left: 30, right: 30}}
        curve={shape.curveNatural}
        svg={{fill: 'rgba(134, 65, 244, 0.8)', stroke: 'blue'}}>
        {/* <Grid /> */}
      </AreaChart>
      <BarChart
        style={{height: 200}}
        data={data2}
        svg={{fill: 'rgb(134, 65, 244)'}}
        contentInset={{top: 30, bottom: 30, left: 30, right: 30}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default Charts;
