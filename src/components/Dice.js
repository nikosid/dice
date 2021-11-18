import DiceIcon from "./DiceIcon";

const Dice = (props) => {
  const arr = Object.values(props.values);
  let max = Math.max(...arr);
  const clickHandler = () => {
    props.onClick(props.number);
  };
  let divClasses = "dice";
  divClasses += props.values[props.number] === max && max > 0 ? " active" : "";
  return (
    <div className={divClasses}>
      <DiceIcon number={props.number} onClick={clickHandler} />
      <div className="dice-number">{props.values[props.number]}</div>
    </div>
  );
};

export default Dice;
