import { useState } from "react";
import "./App.css";
import "./css/BadmintonBoard.css";
import "./css/Component.css";
import Counter from "./component/Counter";
import Basic from "./component/Basic";
import Hooks from "./component/Hooks";
// import Box from "./component/Box1";
import MyComponent from "./component/MyComponent";
import Component from "./component/FunctionComponent";
import BadmintonBoard from "./component/BadmintonBoard";
import ScrollBox from "./component/ScrollBox";
import Router from "./component/Router";
import Box from "./component/Box1";
// import ValidationSample from "./component/ValidationSample";
// import './css/ValidationSample.css';

function App() {
  const [pageState, setPageState] = useState(0);
  return (
    <div className="App">
      {pageState === 0 && (
        <div>
          {/* <MainPage/> */}
          <div onClick={() => setPageState(1)}>배드민턴 보드</div>
          <div onClick={() => setPageState(2)}>카운터</div>
        </div>
      )}
      {pageState === 1 && <BadmintonBoard setPage={(e) => setPageState(e)}/>}
      {pageState === 2 && <Counter />}
      <Router />
      <Basic />
      {/* <Box size="big" /> */}
      {/* <Box size="small" /> */}
      {/* <div className="Component">
        <Hooks />
        <Component />
        <MyComponent name="React" age={4} />
      </div>
      <ScrollBox /> */}
    </div>
  );
}

export default App;
