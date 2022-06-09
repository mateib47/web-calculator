import "./button.scss";

const Button = ({ character, id, setExpr, expr }) => {
  const handleChange = () => {
    if (!(expr == 0 && character == 0)) { //make it nicer
      setExpr("" + expr + character);
    }
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
