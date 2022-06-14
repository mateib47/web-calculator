import "./button.scss";

const Button = ({ character, id, setExpr, expr, decimal, setDecimal }) => {
  const handleChange = () => {
    console.log("before " + decimal);
    switch (character) {
      case "AC":
        setExpr(0);
        setDecimal(0);
        break;
      case "DEL":
        if (expr && expr.slice(-1) == ".") setDecimal(0);
        expr.length > 1 ? setExpr(expr.slice(0, -1)) : setExpr(0);
        break;
      case "=":
        setExpr(evalExpr(expr));
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
        if (expr == 0) {
          handleFirstChar(character);
        } else {
          if (isOperator(character)) {
            console.log(expr.slice(0, -1));
            setDecimal(0);
            if (!isOperator(expr.slice(-1))) {
              setExpr("" + expr.slice(0, -1));
            }
          }
          setExpr("" + expr + character);
        }
    }
    console.log("after " + decimal);
  }; //3 + 5 * 6 - 2 / 4

  const isOperator = (o) => {
    if (o == "%" || o == "/" || o == "*" || o == "+" || o == "-") return true;
    return false;
  };

  const handleFirstChar = (char) => {
    if (!isOperator(char)) setExpr(character);
  };
  //console.log(decimal)
  const evalExpr = (fn) => {
    return new Function("return " + fn)();
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
