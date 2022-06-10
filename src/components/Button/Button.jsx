import "./button.scss";

const Button = ({ character, id, setExpr, expr }) => {
  const handleChange = () => {
    if (character == "AC") {
      setExpr(0);
    } else if (character == "DEL"){
        setExpr(expr.slice(-1))
    }else if(character == "="){
        setExpr(evalExpr(expr));
    }
    
    else if (!(expr == 0 && character == 0)) {
      //make it nicer
      setExpr("" + expr + character);
    }//make switch case 
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
