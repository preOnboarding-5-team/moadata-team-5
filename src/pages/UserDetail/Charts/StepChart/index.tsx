import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryLabel,
  VictoryTheme,
  VictoryTooltip,
} from 'victory';
import { NoData } from 'assets/svgs/index';
import { useEffect, useState } from 'react';
import { hasData } from 'utils/hasData';
import styles from '../charts.module.scss';

interface Props {
  stepData: { y: number; x: string }[];
}

function StepChart({ stepData }: Props) {
  const [isDataValidate, setIsDataValidate] = useState<boolean>();

  useEffect(() => {
    setIsDataValidate(hasData(stepData));
  }, [stepData]);
  return (
    <div>
      {!isDataValidate ? (
        <NoData className={styles.noData} />
      ) : (
        <VictoryChart
          theme={VictoryTheme.material}
          singleQuadrantDomainPadding={{ x: false }}
          domainPadding={{ x: [50, 0] }}
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
            offsetX={50}
            tickFormat={(t) =>
              `${t
                .toString()
                .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')} 보`
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
            labels={({ datum }) =>
              `${datum.x} \n ${datum.y
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
      )}
    </div>
  );
}

export default StepChart;
