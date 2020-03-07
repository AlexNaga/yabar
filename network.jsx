import { defaultTheme } from './lib/style';

const command = 'bash yabar/lib/scripts/get_wifi_name.sh';
const refreshFrequency = 5000; // ms

const renderClass = `
  ${defaultTheme}
  right: auto;
  bottom: auto;
  margin-left: 72%;
`;

const render = ({ output }) => <div>{`${output}`}</div>;

export { command, refreshFrequency, renderClass as className, render };
