import { useCallback } from "react";
import DiceIcon from "./DiceIcon";
import classes from "./Dice.module.css";

const Dice = (props) => {
  const { number, values } = props;
  const arr = Object.values(values);
  let max = Math.max(...arr);
  const clickHandler = useCallback(() => {
    props.onClick(number);
  }, [props.onClick, number]);
  const divClasses =
    values[number] === max && max > 0
      ? `${classes.dice} ${classes.active}`
      : classes.dice;
  return (
    <div className={divClasses}>
      <DiceIcon number={number} onClick={clickHandler} />
      <div className={classes["dice-number"]}>{values[number]}</div>
    </div>
  );
};

export default Dice;
