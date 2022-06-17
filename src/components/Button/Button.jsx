import "./button.scss";
import { flushSync } from "react-dom";

const Button = ({ character, id, setExpr, expr, decimal, setDecimal }) => {
  const handleChange = () => {
    console.log(character);
    switch (character) {
      case "AC":
        flushSync(() => {
        setExpr(0);
        setDecimal(0);});
        break;
      case "DEL":
        if (expr && expr.slice(-1) == ".") flushSync(() => {
          setDecimal(0);});

        expr.length > 1 ? flushSync(() => {
          setExpr(expr.slice(0, -1))}) : flushSync(() => {setExpr(0);});

        break;
      case "=":
        flushSync(() => {
          setExpr(evalExpr(expr));
        });

        break;
      case ".":
        if (decimal == 1) {
          break;
        } else {
          flushSync(() => {
            setDecimal(decimal + 1);});

        }
      case "0":
        if (expr == 0) break;
      default:
        if (expr == 0) {
          handleFirstChar(character);
        } else {
         // console.log(expr);
          if (isOperator(character)) {
            flushSync(() => {
              setDecimal(0);});

            if (isOperator(expr.slice(-1)) && !(character == '-')) {
              flushSync(() => {
                setExpr(expr.slice(0,-1) + character);});

            }else{
              flushSync(() => {
                setExpr("" + expr + character);});


            }
          }else{
            flushSync(() => {
              setExpr("" + expr + character);});

          }
        }
    }
  }; //3 + 5 * 6 - 2 / 4

  const isOperator = (o) => {
    if (o == "%" || o == "/" || o == "*" || o == "+" || o == "-") return true;
    return false;
  };

  const handleFirstChar = (char) => {
    if (!isOperator(char)) flushSync(() => {
      setExpr(character);});

  };
  //console.log(decimal)
  const evalExpr = (fn) => {
    //console.log(fn);
    const result = (new Function("return " + fn)()).toString()
   // console.log(result);
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
