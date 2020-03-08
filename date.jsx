import { defaultTheme } from './lib/style';

const command = 'date +"%a, %d %b"';
const refreshFrequency = 100000; // ms

const renderClass = `
  ${defaultTheme}
  left: auto;
  bottom: auto;
`;

const render = ({ output }) => <div>{output}</div>;

export { command, refreshFrequency, renderClass as className, render };
