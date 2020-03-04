import { defaultTheme } from './lib/style';

const command = 'bash yabar/lib/workspace.sh';
const refreshFrequencyInMs = 1000;

const renderClass = `
  ${defaultTheme}
  right: auto;
  bottom: auto;
  font-weight: bold;
`;

const render = ({ output }) => <div>{`${output}`}</div>;

export { command, refreshFrequencyInMs, renderClass as className, render };
