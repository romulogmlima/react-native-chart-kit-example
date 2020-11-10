import React from 'react';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const SimpleLineChart = ({ data, config }) => {

  const screenWidth = Dimensions.get('window').width;

  return (
    <LineChart
      data={data}
      width={screenWidth}
      height={256}
      withHorizontalLabels={true}
      chartConfig={config}
      style={{
        marginLeft: 10,
        marginTop: 20,
        marginRight: 10,
      }}
    />
  );
}

export default SimpleLineChart;