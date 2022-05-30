import {
  VictoryAxis,
  VictoryChart,
  VictoryLabel,
  VictoryLine,
  VictoryTheme,
} from 'victory';
import { useEffect, useState } from 'react';
import { avgHeartData, convertHeartData } from 'utils/convertHeartData';
import { data136 } from 'data/heartrate_data';
import { axisStyle, dependentAxisStyle, options } from './lineChartOptions';

function LineChart() {
  const [dataList, setDataList] = useState<Array<Data>>([]);
  // const [dateOpt, setDatOpt] = useState(0);
  const [date, setDate] = useState({ start: '2022-02-26', end: '2022-02-27' });

  useEffect(() => {
    if (date.start === date.end) {
      setDataList(convertHeartData(date.start, data136));
    } else {
      setDataList(avgHeartData(data136, date.start, date.end));
    }
  }, [date.end, date.start]);

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <VictoryChart theme={VictoryTheme.material} {...options}>
      <VictoryAxis
        style={axisStyle}
        tickValues={dataList}
        tickFormat={(datum) => datum.crt_ymdt}
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
          data: { stroke: '#c43a31' },
          parent: { border: '1px solid #ccc' },
        }}
        data={dataList}
        x={(datum) => datum.crt_ymdt}
        y={(datum) => datum.avg_beat}
      />
    </VictoryChart>
  );
}

export default LineChart;

// const [diff, setDiff] = useState(0);

// useEffect(() => {
//   switch (dateOpt) {
//     case 0:
//       setDiff(1);
//       break;
//     case 1:
//       setDiff(dayjs(date.end).diff(date.start, 'day') + 1);
//       break;
//     case 2:
//       setDiff(7);
//       break;
//     default:
//       setDiff(1);
//   }
// }, [date, dateOpt]);
