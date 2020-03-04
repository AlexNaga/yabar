import { defaultTheme } from './lib/style';

const command = 'date +"%H:%M"';
const refreshFrequency = 60000; // ms

const renderClass = `
  ${defaultTheme}
  left: auto;
  bottom: auto;
  font-weight: bold;
`;

const render = ({ output }) => <div>{`${output}`}</div>;

export { command, refreshFrequency, renderClass as className, render };
