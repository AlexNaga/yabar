import { defaultTheme } from './lib/style';

const command = '/usr/local/bin/yabai -m query --spaces';
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

const getSpaces = (spaces, displayCount) => {
  return displayCount.map(display => {
    return spaces.filter(item => {
      if (item.display === display) return item;
    });
  });
};

const generateSpaceList = spaces => {
  return spaces.map((displaySpace, i) => {
    return (
      <ul key={i} className="space-container">
        {displaySpace.map((space, i) => {
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

  const spacesMetadata = JSON.parse(output);
  const displayCount = [...new Set(spacesMetadata.map(item => item.display))];
  const spaces = getSpaces(spacesMetadata, displayCount);
  const spaceList = generateSpaceList(spaces);

  return <div className="display-container">{spaceList}</div>;
};

export { command, refreshFrequency, renderClass as className, render };
