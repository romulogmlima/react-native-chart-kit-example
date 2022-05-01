import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {StackedBarChart} from 'react-native-chart-kit';

const SimpleStackedBarChart = ({data, config}) => {
  const screenWidth = Dimensions.get('window').width;

  return (
    <StackedBarChart
      style={styles.container}
      data={data}
      width={screenWidth}
      height={220}
      chartConfig={config}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 25,
    marginRight: 80,
  },
});

export default SimpleStackedBarChart;
