import "./app.scss";
import Topbar from "./components/Topbar/Topbar";
import Calculator from "./components/Calculator/Calculator";
import { useState, useRef } from "react";
import Display from "./components/Display/Display";

const App = () => {
  const [expr, setExpr] = useState("0");
  const [history, setHistory] = useState("");
  const exprRef = useRef(expr);
  // const setExpr = data => {
  //   exprRef.current = data;
  //   _setExpr(data);
  // };

  return (
    <div className="app">
      <Topbar />
      <div className="section">
        <Calculator
          expr={expr}
          setExpr={setExpr}
          history={history}
          setHistory={setHistory}
        />
      </div>
    </div>
  );
};

export default App;
