import StepData1360226 from './step_data/step_136_0226.json';
import StepData1360308 from './step_data/step_136_0308.json';
import StepData1360419 from './step_data/step_136_0419.json';
import StepData3280416 from './step_data/step_328_0416.json';
import StepData3280419 from './step_data/step_328_0419.json';
import StepData3280420 from './step_data/step_328_0420.json';
import StepData3800417 from './step_data/step_380_0417.json';
import StepData3800418 from './step_data/step_380_0418.json';
import StepData3800419 from './step_data/step_380_0419.json';

import HeartData1360226 from './heartrate_data/heartrate_136_0226.json';
import HeartData1360308 from './heartrate_data/heartrate_136_0308.json';
import HeartData1360419 from './heartrate_data/heartrate_136_0419.json';
import HeartData3280416 from './heartrate_data/heartrate_328_0416.json';
import HeartData3280419 from './heartrate_data/heartrate_328_0419.json';
import HeartData3280420 from './heartrate_data/heartrate_328_0420.json';
import HeartData3800417 from './heartrate_data/heartrate_380_0417.json';
import HeartData3800418 from './heartrate_data/heartrate_380_0418.json';
import HeartData3800419 from './heartrate_data/heartrate_380_0419.json';

const allStepData = [
  ...StepData1360226,
  ...StepData1360308,
  ...StepData1360419,
  ...StepData3280416,
  ...StepData3280419,
  ...StepData3280420,
  ...StepData3800417,
  ...StepData3800418,
  ...StepData3800419,
];

const allHeartData = [
  ...HeartData1360226,
  ...HeartData1360308,
  ...HeartData1360419,
  ...HeartData3280416,
  ...HeartData3280419,
  ...HeartData3280420,
  ...HeartData3800417,
  ...HeartData3800418,
  ...HeartData3800419,
];

export { allStepData, allHeartData };
