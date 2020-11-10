import React from 'react';
import { ContributionGraph } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const SimpleContributionGraph = ({ data, config }) => {

  const screenWidth = Dimensions.get('window').width;

  return (
    <ContributionGraph
      values={data}
      endDate={new Date('2017-04-01')}
      numDays={105}
      width={screenWidth}
      height={220}
      chartConfig={config}
      style={{
        marginLeft: 10,
        marginTop: 10,
        marginRight: 10,
      }}
    />
  );
}

export default SimpleContributionGraph;