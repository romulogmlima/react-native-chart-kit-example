import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {LineChart} from 'react-native-chart-kit';

const SimpleLineChart = ({data, config, bezier = false}) => {
  const screenWidth = Dimensions.get('window').width;

  return (
    <LineChart
      bezier={bezier}
      data={data}
      width={screenWidth}
      height={240}
      withHorizontalLabels={true}
      chartConfig={config}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
});

export default SimpleLineChart;
