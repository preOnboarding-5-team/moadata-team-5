import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryLabel,
  VictoryTheme,
  VictoryTooltip,
} from 'victory';

interface Props {
  stepData: { steps: number; crt_ymdt: string }[];
}

function StepChart({ stepData }: Props) {
  return (
    <VictoryChart
      theme={VictoryTheme.material}
      domainPadding={30}
      animate={{
        duration: 2000,
        onLoad: { duration: 1000 },
      }}
      height={500}
      width={800}
    >
      <VictoryAxis
        tickFormat={(datum, index) => {
          if (stepData.length < 10) return `${datum.split(' ')[0]}`;
          if (index % 10 !== (stepData.length - 1) % 10) return '';
          return `${datum.split(' ')[0]}`;
        }}
        style={{
          ticks: { stroke: 'transparent' },
          grid: { stroke: 'transparent' },
          tickLabels: { fontSize: 12, padding: 5, fill: '#94a2ad' },
        }}
      />
      <VictoryAxis
        dependentAxis
        tickFormat={(t) =>
          `${t.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')} 보`
        }
        tickLabelComponent={<VictoryLabel dx={-30} dy={-10} />}
        style={{
          axis: { display: 'none' },
          ticks: { display: 'none' },
          tickLabels: { fontSize: 12, fill: '#94a2ad', textAnchor: 'left' },
          grid: { stroke: '#edeff1', strokeDasharray: 0, strokeWidth: 1 },
        }}
      />
      <VictoryBar
        data={stepData}
        x="crt_ymdt"
        y="steps"
        labels={({ datum }) =>
          `${datum.crt_ymdt} \n ${datum.steps
            .toString()
            .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}보`
        }
        style={{
          data: { fill: '#2DD4C0' },
          parent: { border: '1px solid #ccc' },
          labels: { fill: 'white', fontSize: '15px', fontWeight: 'bold' },
        }}
        barWidth={13}
        labelComponent={
          <VictoryTooltip
            cornerRadius={5}
            flyoutStyle={{ fill: '#0F172A' }}
            flyoutWidth={95}
            flyoutHeight={50}
            flyoutPadding={5}
          />
        }
      />
    </VictoryChart>
  );
}

export default StepChart;
