import "./history.scss";

const History = ({ text }) => {
  return (
    <div className="history">
      {text.split("<br/>").map((i) => {
        return <p>{i}</p>;
      })}
    </div>
  );
};

export default History;
