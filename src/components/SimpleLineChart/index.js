import React from 'react';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const SimpleLineChart = ({ data, config, bezier = false }) => {

  const screenWidth = Dimensions.get('window').width;

  return (
    <LineChart
      bezier={bezier}
      data={data}
      width={screenWidth}
      height={256}
      withHorizontalLabels={true}
      chartConfig={config}
      style={{
        marginTop: 30,
      }}
    />
  );
}

export default SimpleLineChart;