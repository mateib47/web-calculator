import "./button.scss";

const Button = ({ character, id, setExpr, expr, decimal, setDecimal }) => {
  const handleChange = () => {
    switch (character) {
      case "AC":
        setExpr(0);
        setDecimal(0);
        break;
      case "DEL":
        if (expr.slice(-1) == ".") setDecimal(0);
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
        expr == 0 ? handleFirstChar(character) : setExpr("" + expr + character);
    }
  }; //3 + 5 * 6 - 2 / 4

  const handleFirstChar = (char) => {
      console.log(char.indexOf("+-*/)."));
      if (!(char.indexOf("+-*/).")) )
            setExpr(character)
  }

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
