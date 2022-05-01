import React from 'react';
import {ScrollView} from 'react-native';

import SimpleBarChart from './components/SimpleBarChart';
import SimpleProgressChart from './components/SimpleProgressChart';
import SimpleLineChart from './components/SimpleLineChart';
import SimplePieChart from './components/SimplePieChart';
import SimpleContributionGraph from './components/SimpleContributionGraph';
import SimpleStackedBarChart from './components/SimpleStackedBarChart';

import {
  dataLineChart,
  dataProgressChart,
  dataBarChart,
  dataContributionGraph,
  dataPieChart,
  dataStackedBarChart,
} from './data';

const App = () => {
  const chartConfig = {
    backgroundGradientFrom: '#fff',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#fff',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(80, 10, 250, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.4,
    useShadowColorFromDataset: false, // optional
  };

  return (
    <ScrollView>
      <SimpleLineChart
        data={dataLineChart}
        config={chartConfig}
        bezier={true}
      />
      <SimpleProgressChart data={dataProgressChart} config={chartConfig} />
      <SimpleContributionGraph
        data={dataContributionGraph}
        config={chartConfig}
      />
      <SimpleBarChart data={dataBarChart} config={chartConfig} />
      <SimplePieChart data={dataPieChart} config={chartConfig} />
      <SimpleStackedBarChart data={dataStackedBarChart} config={chartConfig} />
    </ScrollView>
  );
};

export default App;
