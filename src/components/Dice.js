import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiceOne,
  faDiceTwo,
  faDiceThree,
  faDiceFour,
  faDiceFive,
  faDiceSix,
} from "@fortawesome/free-solid-svg-icons";

const Dice = (props) => {
  let arr = Object.values(props.values);
  let max = Math.max(...arr);
  const icon = getIcon(props.number);
  const clickHandler = () => {
    props.onClick(props.number);
  };
  let divClasses = "dice";
  divClasses += props.values[props.number] === max && max > 0 ? " active" : "";
  return (
    <div className={divClasses}>
      <FontAwesomeIcon icon={icon} size="4x" onClick={clickHandler} />
      <div className="dice-number">{props.values[props.number]}</div>
    </div>
  );
};

const getIcon = (diceNumber) => {
  switch (diceNumber) {
    case "1":
      return faDiceOne;
    case "2":
      return faDiceTwo;
    case "3":
      return faDiceThree;
    case "4":
      return faDiceFour;
    case "5":
      return faDiceFive;
    case "6":
      return faDiceSix;
    default:
      return faDiceOne;
  }
};

export default Dice;
