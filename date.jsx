import { defaultTheme } from './lib/style';

const command = 'date +"%a, %d %b %y"';
const refreshFrequencyInMs = 100000;

const renderClass = `
  ${defaultTheme}
  width: auto;
  right: auto;
  bottom: auto;
  left: 50%;
  text-align: center;
  transform: translate(-50%);
`;

const render = ({ output }) => <div>{`${output}`}</div>;

export { command, refreshFrequencyInMs, renderClass as className, render };
