import React from 'react';
import { Dimensions } from 'react-native';
import { StackedBarChart } from "react-native-chart-kit";

const SimpleStackedBarChart = ({ data, config }) => {

  const screenWidth = Dimensions.get('window').width;

  return (
    <StackedBarChart
      style={{
        marginLeft: 25,
        marginRight: 80,
      }}
      data={data}
      width={screenWidth}
      height={220}
      chartConfig={config}
    />
  );
}

export default SimpleStackedBarChart;