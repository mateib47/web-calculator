import "./button.scss";
import { useEffect, useRef } from "react";

const Button = ({
  character,
  id,
  setExpr,
  expr,
  decimal,
  setDecimal,
  result,
  setResult,
  history,
  setHistory,
}) => {
  const handleKeyboard = () => {};

  const handleChange = (character) => {
    switch (character) {
      case "AC":
        resetStates();
        break;
      case "DEL":
        if (expr && expr.slice(-1) == ".") setDecimal(0);
        expr.length > 1 ? setExpr(expr.slice(0, -1)) : setExpr(0);
        break;
      case "=":
        setResults();
        break;
      case ".":
        if (decimal == 1) {
          break;
        } else {
          setDecimal(decimal + 1);
        }
      case "0":
        if (expr == 0) break;
      default:
        if (result != '') {
          handleNextExpr();
        } else if (expr == 0) {
          handleFirstChar(character);
        } else {
          handleChar();
        }
    }
  };

  // useEffect(() => {
  //   window.addEventListener("keydown", handleKeyboard);
  //   return () => {
  //     window.removeEventListener("keydown", handleKeyboard);
  //   };
  // }, []);
  
const resetStates = () => {
    setExpr(0);
    setDecimal(0);
    setResult('');
    setHistory('');
}

const setResults = () => { 
    let res = evalExpr(expr);
    setExpr(res);
    setResult(res);
    setHistory(expr + " = " + res+'<br/>' + history); 
}

const handleNextExpr = () => {
    if (isOperator(character)) {
       setExpr(result + character);
    } else {
       handleFirstChar(character);
    }
    setResult('');
}

const handleChar = () => {
    if (isOperator(character)) {
       handleOperator(character);
    } else {
       setExpr("" + expr + character);
    }
}

  const isOperator = (o) => {
    if (o == "%" || o == "/" || o == "*" || o == "+" || o == "-") return true;
    return false;
  };

  const handleFirstChar = (char) => {
    if (!isOperator(char)) {
      setExpr(char);
      console.log(char);
    }
  };

  const handleOperator = () => {
    setDecimal(0);
    if (isOperator(expr.slice(-1))) {
      if (isOperator(expr.slice(-2)[0])) {
        setExpr(expr.slice(0, -2) + character);
        return;
      } else if (!(character == "-")) {
        setExpr(expr.slice(0, -1) + character);
        return;
      }
    }
    setExpr("" + expr + character);
  };

  const evalExpr = (fn) => {
    const result = new Function("return " + fn)().toString();
    return result;
  };

  return (
    <div
      className="button"
      id={id}
      onClick={() => {
        handleChange(character);
      }}
    >
      {character}
    </div>
  );
};

export default Button;
