import styles from './lib/styles/styles.jsx';

const command = 'bash yabar/lib/scripts/get_displays_and_spaces.sh';

const refreshFrequency = false;

const renderClass = `
  font-family: ${styles.fontFamily};
  font-size: ${styles.fontSize};
  background-color: #27313E;
  line-height: 20px;
  color: #FFF;
  right: auto;
  bottom: auto;
  top: 8px;
  left: 25px;
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
    margin-left: 12px;
    padding-left: 12px;
    border-left: 1px solid #D8DEE9;
  }

  li {
    padding: 0 3px;
    margin: 0 5px;
  }

  li.visible {
    border-top: 2px solid transparent;
    border-bottom: 2px solid ${styles.colors.dim};
  }

  li.focused {
    border: 2px solid ${styles.colors.lightgray};
    border-radius: 2px;
  }
`;

const getClassName = space => {
  let className = '';

  if (space.visible) className += ' visible';
  if (space.focused) className += ' focused';

  return className;
};

const generateSpaceList = (displays, spaces) => {
  return displays.map((display, i) => {
    return (
      <ul key={i} className="space-container">
        {spaces.map((space, i) => {
          if (display.index === space.display) {
            return (
              <li key={i} className={getClassName(space)}>
                {space.index}
              </li>
            );
          }
        })}
      </ul>
    );
  });
};

const parseJson = json => {
  try {
    return JSON.parse(json);
  } catch (error) {
    return;
  }
};

const render = ({ output }) => {
  if (!output) return;

  const data = parseJson(output);
  if (!data) return;

  const { displays, spaces } = data;
  const spaceList = generateSpaceList(displays, spaces);

  return <div className="display-container">{spaceList}</div>;
};

export { command, refreshFrequency, renderClass as className, render };
