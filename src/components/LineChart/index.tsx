import {
  VictoryAxis,
  VictoryChart,
  VictoryLabel,
  VictoryLine,
  VictoryTheme,
  VictoryTooltip,
  VictoryVoronoiContainer,
} from 'victory';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import {
  avgHeartData,
  convertHeartData,
  getAvgBeat,
} from 'utils/convertHeartData';
import { data136 } from 'data/heartrate_data';
import dayjs from 'dayjs';
import { axisStyle, dependentAxisStyle, options } from './lineChartOptions';
import styles from './LineChart.module.scss';

interface Props {
  startDate: Date;
  endDate: Date;
  setAvgBeat: Dispatch<SetStateAction<number>>;
}

function LineChart({ startDate, endDate, setAvgBeat }: Props) {
  const start = dayjs(startDate).format('YYYY-MM-DD');
  const end = dayjs(endDate).format('YYYY-MM-DD');
  const [dataList, setDataList] = useState<Array<Data>>([]);

  useEffect(() => {
    if (start === end) {
      setDataList(convertHeartData(start, data136));
    } else {
      setDataList(avgHeartData(data136, start, end));
    }
  }, [end, start]);

  useEffect(() => {
    if (start !== end) {
      setAvgBeat(getAvgBeat(dataList));
    }
  }, [dataList, end, setAvgBeat, start]);

  return (
    <div className={styles.container}>
      <VictoryChart
        theme={VictoryTheme.material}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...options}
        containerComponent={
          <VictoryVoronoiContainer
            voronoiDimension="x"
            labels={({ datum }) => `${datum.crt_ymdt} \n ${datum.avg_beat}bpm`}
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
        }
      >
        <VictoryAxis
          style={axisStyle}
          tickValues={dataList}
          tickFormat={(datum, index) => {
            if (dataList.length < 10) return datum;
            if (index % 10 !== (dataList.length - 1) % 10) return '';
            return datum;
          }}
          offsetY={50}
        />
        <VictoryAxis
          dependentAxis
          tickLabelComponent={<VictoryLabel dx={-30} dy={-10} />}
          orientation="left"
          style={dependentAxisStyle}
        />
        <VictoryLine
          style={{
            data: { stroke: '#ff443a' },
            parent: { border: '1px solid #ccc' },
            labels: { fill: 'white', fontSize: '15px', fontWeight: 'bold' },
          }}
          data={dataList}
          x={(datum) => datum.crt_ymdt}
          y={(datum) => datum.avg_beat}
        />
      </VictoryChart>
    </div>
  );
}

export default LineChart;
