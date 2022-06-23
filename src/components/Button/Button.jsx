import "./button.scss";
import { useEffect,useRef } from "react";

const Button = ({
  character,
  id,
  setExpr,
  expr,
  decimal,
  setDecimal,
  result,
  setResult,
}) => {

  const handleKeyboard = () => {

  }

  const handleChange = (character) => {
    switch (character) {
      case "AC":
        setExpr(0);
        setDecimal(0);
        setResult(0);
        break;
      case "DEL":
        if (expr && expr.slice(-1) == ".") setDecimal(0);
        expr.length > 1 ? setExpr(expr.slice(0, -1)) : setExpr(0);
        break;
      case "=":
        let res = evalExpr(expr);
        setExpr(res);
        setResult(res);
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
        if (result != 0) {
          if (isOperator(character)) {
            setExpr(result + character);
          } else {
            handleFirstChar(character);
          }
          setResult(0);
        } else if (expr == 0) {
          handleFirstChar(character);
        } else {
          if (isOperator(character)) {
            handleOperator(character);
          } else {
            setExpr("" + expr + character);
          }
        }
    }
  };

  // useEffect(() => {
  //   window.addEventListener("keydown", handleKeyboard);
  //   return () => {
  //     window.removeEventListener("keydown", handleKeyboard);
  //   };
  // }, []);

  const isOperator = (o) => {
    if (o == "%" || o == "/" || o == "*" || o == "+" || o == "-") return true;
    return false;
  };

  const handleFirstChar = (char) => {
    if (!isOperator(char)) {
      setExpr(char);
      console.log(char)
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
