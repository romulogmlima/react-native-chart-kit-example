import React from 'react';
import { PieChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const SimplePieChart = ({ data, config }) => {

  const screenWidth = Dimensions.get('window').width;

  return (
    <PieChart
      data={data}
      width={screenWidth}
      height={220}
      chartConfig={config}
      accessor="population"
      backgroundColor="transparent"
      style={{
        backgroundColor: '#fff',
        marginLeft: 10,
        marginTop: 10,
        marginRight: 10,
      }}
    />
  );
}

export default SimplePieChart;