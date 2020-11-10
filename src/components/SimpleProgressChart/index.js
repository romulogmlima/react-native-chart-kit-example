import React from 'react';
import { Dimensions } from 'react-native';
import { ProgressChart } from 'react-native-chart-kit';

const SimpleProgressChart = ({ data, config }) => {

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
      style={{
        marginTop: 20,
        marginRight: 0,
      }}
    />
  );
}

export default SimpleProgressChart;