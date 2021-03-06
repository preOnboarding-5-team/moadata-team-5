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
} from 'pages/UserDetail/Charts/LineChart/convertHeartData';
import dayjs from 'dayjs';
import { useParams } from 'react-router-dom';
import { hasData } from 'utils/hasData';
import { NoData } from 'assets/svgs/index';
import { axisStyle, dependentAxisStyle, options } from './lineChartOptions';

import styles from '../charts.module.scss';

interface Props {
  startDate: string;
  endDate: string;
  setAvgBeat: Dispatch<SetStateAction<number>>;
}

function LineChart({ startDate, endDate, setAvgBeat }: Props) {
  const start = dayjs(startDate).format('YYYY-MM-DD');
  const end = dayjs(endDate).format('YYYY-MM-DD');
  const [dataList, setDataList] = useState<Array<Data>>([]);
  const userSeq = Number(useParams().userId);
  const [isDataValidate, setIsDataValidate] = useState<boolean>();

  useEffect(() => {
    if (start === end) {
      setDataList(convertHeartData(start, userSeq));
    } else {
      setDataList(avgHeartData(start, end, userSeq));
    }
  }, [end, start, userSeq]);

  useEffect(() => {
    setAvgBeat(getAvgBeat(dataList));
  }, [dataList, end, setAvgBeat, start]);

  useEffect(() => {
    setIsDataValidate(hasData(dataList));
  }, [dataList]);

  return (
    <div className={styles.chart}>
      {!isDataValidate ? (
        <NoData className={styles.noData} />
      ) : (
        <VictoryChart
          theme={VictoryTheme.material}
          {...options}
          containerComponent={
            <VictoryVoronoiContainer
              voronoiDimension="x"
              labels={({ datum }) => `${datum.x} \n ${datum.y}bpm`}
              labelComponent={
                <VictoryTooltip
                  cornerRadius={5}
                  flyoutStyle={{ fill: '#003e57' }}
                  flyoutWidth={150}
                  flyoutHeight={70}
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
              labels: { fill: 'white', fontSize: '22px', fontWeight: '500' },
            }}
            data={dataList}
          />
        </VictoryChart>
      )}
    </div>
  );
}

export default LineChart;
