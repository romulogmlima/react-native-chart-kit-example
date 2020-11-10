import React from 'react';
import { BarChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const SimpleBarChart = ({ data, config }) => {

  const screenWidth = Dimensions.get('window').width;

  return (
    <BarChart
      data={data}
      width={screenWidth}
      height={220}
      yAxisLabel="$"
      chartConfig={config}
      //verticalLabelRotation={30}
      withHorizontalLabels={true}
      style={{
        marginLeft: 10,
        marginTop: 30,
        marginRight: 10,
      }}
    />
  );
}

export default SimpleBarChart;