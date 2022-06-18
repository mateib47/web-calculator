import "./button.scss";

const Button = ({ character, id, setExpr, expr, decimal, setDecimal, result, setResult }) => {
  const handleChange = () => {
    console.log(character);
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
        if (result != 0){
          if(isOperator(character)){
            setExpr(result + character)
          }else{
            handleFirstChar(character);

          }
          setResult(0);
        }
        else if (expr == 0) {
          handleFirstChar(character);
        } else {
         // console.log(expr);
          if (isOperator(character)) {
            setDecimal(0);
            if (isOperator(expr.slice(-1)) && !(character == '-')) {
              setExpr(expr.slice(0,-1) + character);
            }else{
              setExpr("" + expr + character);

            }
          }else{
            setExpr("" + expr + character);
          }
        }
    }
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