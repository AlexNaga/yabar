import { run } from 'uebersicht';
import { defaultTheme } from './lib/style';

const command = 'bash yabar/lib/scripts/get_displays_and_spaces.sh';

const refreshFrequency = false;

const renderClass = `
  ${defaultTheme}
  right: auto;
  bottom: auto;
  font-weight: bold;

  .display-container {
    display: flex;
  }

  ul {
    padding: 0;
    list-style-type: none;
    display: flex;
    align-items: center;
    margin: 0;
  }

  ul:not(:first-of-type) {
    margin-left: 20px;
    padding-left: 8px;
    border-left: 1px solid #D8DEE9;
  }

  li {
    padding: 0 3px;
    margin: 0 5px;
  }

  li.active {
    border: 2px solid #D8DEE9;
  }
`;

const generateSpaceList = (displays, spaces) => {
  return displays.map((display, i) => {
    return (
      <ul key={i} className="space-container">
        {spaces.map((space, i) => {
          return (
            <li key={i} className={space.focused ? 'active' : ''}>
              {space.index}
            </li>
          );
        })}
      </ul>
    );
  });
};

const render = ({ output }) => {
  if (!output) return;

  const { displays, spaces } = JSON.parse(output);
  const spaceList = generateSpaceList(displays, spaces);

  return <div className="display-container">{spaceList}</div>;
};

export { command, refreshFrequency, renderClass as className, render };
