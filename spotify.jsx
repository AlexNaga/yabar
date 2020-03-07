import { defaultTheme } from './lib/style';

const command = 'bash yabar/lib/scripts/spotify/get_track.sh';
const refreshFrequency = 5000;

const renderClass = `
  ${defaultTheme}
  left: auto;
  bottom: auto;
  font-weight: bold;
  margin-right: calc(13ch + 13px);
`;

const render = ({ output }) => {
  if (!output) return;

  const { artist, name } = JSON.parse(output);

  let songStr = `${artist} - ${name}`;
  const tooLongStr = songStr.length > 34;

  if (tooLongStr) {
    songStr = `${songStr.slice(0, 30)} ...`;
  }

  return <div>{`${songStr}`}</div>;
};

export { command, refreshFrequency, renderClass as className, render };
