import { VictoryAxis, VictoryBar, VictoryChart, VictoryTooltip } from 'victory';

interface Props {
  stepData: { steps: number; crt_ymdt: string }[];
}

function StepChart({ stepData }: Props) {
  const style = {
    ticks: {
      stroke: 'grey',
      size: 3,
    },
    tickLabels: {
      fill: 'black',
      fontSize: 8,
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
        height={500}
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
          labels={({ datum }) => `${datum.crt_ymdt} \n ${datum.steps}보`}
          style={{ data: { fill: '#2DD4C0' } }}
          labelComponent={
            <VictoryTooltip
              flyoutStyle={{ fill: 'white' }}
              flyoutWidth={100}
              cornerRadius={10}
            />
          }
        />
      </VictoryChart>
    </div>
  );
}

export default StepChart;
