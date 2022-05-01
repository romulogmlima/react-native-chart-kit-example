import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {PieChart} from 'react-native-chart-kit';

const SimplePieChart = ({data, config}) => {
  const screenWidth = Dimensions.get('window').width;

  return (
    <PieChart
      data={data}
      width={screenWidth}
      height={220}
      chartConfig={config}
      accessor="population"
      backgroundColor="transparent"
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginLeft: 10,
    marginTop: 10,
    marginRight: 10,
  },
});

export default SimplePieChart;
