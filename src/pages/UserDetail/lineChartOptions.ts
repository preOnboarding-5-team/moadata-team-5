export const options = {
  domainPadding: 30,
  animate: { duration: 2000, onLoad: { duration: 1000 } },
  height: 350,
  width: 600,
};

export const axisStyle = {
  axis: { stroke: 'transparent' },
  ticks: { stroke: 'transparent' },
  grid: { stroke: 'transparent' },
  tickLabels: { fontSize: 12, padding: 5, fill: '#94a2ad' },
};

export const axisStyleNone = { display: 'none' };

export const dependentAxisStyle = {
  axis: { display: 'none' },
  ticks: { display: 'none' },
  tickLabels: { fontSize: 12, fill: '#94a2ad', textAnchor: 'left' },
  grid: { stroke: '#edeff1', strokeDasharray: 0, strokeWidth: 1 },
};
