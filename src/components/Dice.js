import { useState } from "react";
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
  const [count, setCount] = useState(0);
  const icon = getIcon(props.number);
  const clickHandler = () => {
    setCount((count) => count + 1);
  };
  return (
    <div className="dice">
      <FontAwesomeIcon icon={icon} size="4x" onClick={clickHandler} />
      <div className="dice-number">{count}</div>
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
