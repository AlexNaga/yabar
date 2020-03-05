import { defaultTheme } from "./lib/style";

const command = "/usr/local/bin/yabai -m query --spaces";
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

  ul:not(:first-child) {
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

const render = ({ output }) => {
  const spaces = JSON.parse(output);

  const numDisplays = [...new Set(spaces.map(item => item.display))];

  const displaySpaces = numDisplays.map(display => {
    return spaces.filter(item => {
      if (item.display === display) return item;
    });
  });

  const displayList = displaySpaces.map((displaySpace, i) => {
    return (
      <ul key={i} className="space-container">
        {displaySpace.map((space, i) => {
          return (
            <li className={space.focused ? "active" : ""}>{space.index}</li>
          );
        })}
      </ul>
    );
  });

  return <div className="display-container">{displayList}</div>;
};

export { command, refreshFrequency, renderClass as className, render };
