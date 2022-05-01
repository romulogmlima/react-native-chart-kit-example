import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {ProgressChart} from 'react-native-chart-kit';

const SimpleProgressChart = ({data, config}) => {
  const screenWidth = Dimensions.get('window').width;

  return (
    <ProgressChart
      data={data}
      width={screenWidth}
      height={230}
      strokeWidth={15}
      radius={30}
      chartConfig={config}
      hideLegend={false}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginRight: 0,
  },
});

export default SimpleProgressChart;
