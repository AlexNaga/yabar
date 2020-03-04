import { defaultTheme } from './lib/style';

const command = 'bash yabar/lib/network.sh';
const refreshFrequencyInMs = 5000;

const renderClass = `
  ${defaultTheme}
  right: auto;
  bottom: auto;
  margin-left: calc(5ch + 20px);
`;

const render = ({ output }) => <div>{`${output}`}</div>;

export { command, refreshFrequencyInMs, renderClass as className, render };
