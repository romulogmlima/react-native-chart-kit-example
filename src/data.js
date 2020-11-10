
const dataLineChart = {
  labels: ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.'],
  datasets: [
    {
      data: [50, 20, 2, 16, 71, 50],
      color: (opacity = 1) => `rgba(134, 165, 244, ${opacity})`,
    },
    {
      data: [20, 10, 34, 56, 87, 90],
      color: (opacity = 1) => `rgba(34, 165, 144, ${opacity})`,
    },
    {
      data: [30, 50, 67, 40, 10, 2],
      color: (opacity = 2) => `rgba(34, 5, 144, ${opacity})`,
    },
  ],
};

const dataProgressChart = {
  labels: ['Swim', 'Bike', 'Run'], // optional
  data: [0.8, 0.2, 0.65],
};

const dataBarChart = {
  labels: ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.'],
  datasets: [
    {
      data: [44, 45, 28, 40, 29, 43],
    },
  ],
};

const dataContributionGraph = [
  { date: "2017-01-02", count: 1 },
  { date: "2017-01-03", count: 2 },
  { date: "2017-01-04", count: 3 },
  { date: "2017-01-05", count: 4 },
  { date: "2017-01-06", count: 5 },
  { date: "2017-01-30", count: 2 },
  { date: "2017-01-31", count: 3 },
  { date: "2017-03-01", count: 7 },
  { date: "2017-04-01", count: 4 },
  { date: "2017-03-05", count: 2 },
  { date: "2017-02-30", count: 4 }
];

const dataPieChart = [
  {
    name: 'Seoul',
    population: 21500000,
    color: 'rgba(131, 167, 234, 1)',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Toronto',
    population: 2800000,
    color: '#F00',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Beijing',
    population: 527612,
    color: 'red',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'New York',
    population: 8538000,
    color: 'pink',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Moscow',
    population: 11920000,
    color: 'rgb(0, 0, 255)',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
];

export { dataLineChart, dataProgressChart, dataBarChart, dataContributionGraph, dataPieChart };
