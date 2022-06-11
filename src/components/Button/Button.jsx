import "./button.scss";

const Button = ({ character, id, setExpr, expr }) => {
  const handleChange = () => {
    switch(character){
        case "AC":
            setExpr(0);
            break;
        case "DEL":
            expr.length > 1 ? setExpr(expr.slice(0,-1)) : setExpr(0);
            break;
        case "=":
            setExpr(evalExpr(expr));
            break;
        case ".":
            if (expr.slice(-1) ==".")
            break
        case "0":
            if (expr == 0)
            break
        default:
            expr == 0 ? setExpr(character) : setExpr("" + expr + character);
    }
  };

  const evalExpr = (fn) => {
    return new Function('return ' + fn)();
  }

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
