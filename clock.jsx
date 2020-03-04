import { defaultTheme } from './lib/style';

const command = 'date -u +"%H:%M"';
const refreshFrequencyInMs = 60000;

const renderClass = `
  ${defaultTheme}
  left: auto;
  bottom: auto;
  font-weight: bold;
`;

const render = ({ output }) => <div>{`${output}`}</div>;

export { command, refreshFrequencyInMs, renderClass as className, render };
