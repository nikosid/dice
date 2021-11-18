import DiceIcon from "./DiceIcon";
import classes from "./Dice.module.css"

const Dice = (props) => {
  const arr = Object.values(props.values);
  let max = Math.max(...arr);
  const clickHandler = () => {
    props.onClick(props.number);
  };
  const divClasses = props.values[props.number] === max && max > 0 ? `${classes.dice} ${classes.active}` : classes.dice;
  return (
    <div className={divClasses}>
      <DiceIcon number={props.number} onClick={clickHandler} />
      <div className={classes["dice-number"]}>{props.values[props.number]}</div>
    </div>
  );
};

export default Dice;
