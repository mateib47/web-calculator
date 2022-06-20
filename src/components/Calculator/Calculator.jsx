import "./calculator.scss";
import Button from "../Button/Button";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import Display from "../Display/Display";
import Result from "../Result/Result";

const Calculator = ({expr, setExpr}) => {

  const [decimal, setDecimal] = useState(0);
  const [result, setResult] = useState(0);
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
      </div>
      <div className="bottom">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0.5}>
            {chars.map((c) => (
              <Grid item xs={3} sx={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center' }}>
                <Button
                  character={c.char}
                  id={c.id}
                  setExpr={setExpr}
                  expr={expr}
                  decimal={decimal}
                  setDecimal={setDecimal}
                  result={result}
                  setResult={setResult} 
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