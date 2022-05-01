import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {BarChart} from 'react-native-chart-kit';

const SimpleBarChart = ({data, config}) => {
  const screenWidth = Dimensions.get('window').width;

  return (
    <BarChart
      data={data}
      width={screenWidth}
      height={220}
      yAxisLabel="$"
      chartConfig={config}
      withHorizontalLabels={true}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginTop: 30,
    marginRight: 10,
  },
});

export default SimpleBarChart;
