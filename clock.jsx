import { defaultTheme } from './lib/style';

const command = 'date +"%H:%M"';
const refreshFrequency = 60000; // ms

const renderClass = `
  ${defaultTheme}
  font-weight: bold;
  width: auto;
  right: auto;
  bottom: auto;
  left: 50%;
  text-align: center;
  transform: translate(-50%);
`;

const render = ({ output }) => <div>{output}</div>;

export { command, refreshFrequency, renderClass as className, render };
