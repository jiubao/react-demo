import React from 'react';
import './style.scss';
import grid from './grid.png';
import alita from './alita.jpeg';
import Svg0 from './svg.svg';
import Pack from './pack.svg';

const version = process.env.APP_VERSION;

export const App: React.FC = () => {
  return (
    <div className="App">
      <table>
        <tr>
          <td>version: </td>
          <td>{version}</td>
        </tr>
      </table>
      {/* <Svg0 />
      <Pack /> */}
      <img src={Pack} />
      <img src={Svg0} />
      <img src={grid} />
      <img src={alita} />
    </div>
  );
};