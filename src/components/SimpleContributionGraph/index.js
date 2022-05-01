import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {ContributionGraph} from 'react-native-chart-kit';

const SimpleContributionGraph = ({data, config}) => {
  const screenWidth = Dimensions.get('window').width;

  return (
    <ContributionGraph
      values={data}
      endDate={new Date('2017-04-01')}
      numDays={105}
      width={screenWidth}
      height={220}
      chartConfig={config}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginTop: 10,
    marginRight: 10,
  },
});

export default SimpleContributionGraph;
