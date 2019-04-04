import * as React from "react";
import { css } from "emotion";

const style = css`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const App = () => (
  <div className={style}>
    <h1>UI Development Environments</h1>
  </div>
);
App.displayName = "App";
export default App;
