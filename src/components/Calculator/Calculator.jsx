import "./calculator.scss";
import Button from "../Button/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import Display from "../Display/Display";
import Result from "../Result/Result";
import History from "../History/History";

const Calculator = ({ expr, setExpr, history, setHistory }) => {
  const [decimal, setDecimal] = useState(0);
  const [result, setResult] = useState('');

  let chars = [
    { char: "AC", id: "clear" },
    { char: "DEL", id: "delete" },
    { char: ".", id: "decimal" },
    { char: "/", id: "divide" },
    { char: "1", id: "one" },
    { char: "2", id: "two" },
    { char: "3", id: "three" },
    { char: "+", id: "add" },
    { char: "4", id: "four" },
    { char: "5", id: "five" },
    { char: "6", id: "six" },
    { char: "-", id: "subtract" },
    { char: "7", id: "seven" },
    { char: "8", id: "eight" },
    { char: "9", id: "nine" },
    { char: "*", id: "multiply" },
    { char: "(", id: "lpar" },
    { char: ")", id: "rpar" },
    { char: "0", id: "zero" },
    { char: "=", id: "equals" },
  ];
  return (
    <div className="calculator">
      <div className="top">
        <Display text={expr} />
        <Result result={result} setResult={setResult} />
        <History text={history} />
      </div>
      <div className="bottom">
        <Box sx={{ flexGrow: 1, height: "90%" }}>
          <Grid container spacing={0} sx={{ height: "100%" }}>
            {chars.map((c) => (
              <Grid item xs={3}>
                <Button
                  character={c.char}
                  id={c.id}
                  setExpr={setExpr}
                  expr={expr}
                  decimal={decimal}
                  setDecimal={setDecimal}
                  result={result}
                  setResult={setResult}
                  history={history}
                  setHistory={setHistory}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default Calculator;
