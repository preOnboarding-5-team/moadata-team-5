import { VictoryAxis, VictoryBar, VictoryChart, VictoryTooltip } from 'victory';
import ConvertData from './convertData';

function StepChart() {
  const stepData = ConvertData('2022-03-08', '2022-03-08');
  const style = {
    ticks: {
      stroke: 'red',
      size: 5,
    },
    tickLabels: {
      fill: 'black',
      fontSize: 5,
    },
  };
  return (
    <div>
      <VictoryChart
        domainPadding={30}
        animate={{
          duration: 2000,
          onLoad: { duration: 1000 },
        }}
        height={350}
        width={600}
      >
        <VictoryAxis
          tickFormat={(t, index) => {
            if (stepData.length < 21) return `${t.split(' ')[0]}`;
            if (index % 5 !== (stepData.length - 1) % 5) return '';
            return `${t.split(' ')[0]}`;
          }}
          style={style}
        />
        <VictoryAxis
          dependentAxis
          tickFormat={(t) => `${t} 보`}
          style={{
            tickLabels: { fill: 'gray', fontSize: 8 },
            grid: { stroke: '#EDEFF1' },
          }}
        />
        <VictoryBar
          data={stepData}
          x="crt_ymdt"
          y="steps"
          labels={({ datum }) => `${datum.crt_ymdt} : ${datum.steps}보`}
          labelComponent={<VictoryTooltip />}
        />
      </VictoryChart>
    </div>
  );
}

export default StepChart;
