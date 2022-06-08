import "./calculator.scss";
import Button from "../Button/Button";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useState } from "react";

const Calculator = () => {
  const [expr, setExpr] = useState("");

  let chars = [
    { char: "1", id: "one" },
    { char: "2", id: "two" },
    { char: "3", id: "three" },
    { char: "4", id: "four" },
    { char: "5", id: "five" },
    { char: "6", id: "six" },
    { char: "7", id: "seven" },
    { char: "8", id: "eight" },
    { char: "9", id: "nine" },
  ];
  return (
    <div className="calculator">
      <div className="top">
        <div className="textBox">{expr}</div>
      </div>
      <div className="bottom">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3}>
            {chars.map((c) => (
              <Grid item xs={4}>
                <Button character={c.char} id={c.id} setExpr={setExpr} expr={expr} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default Calculator;
