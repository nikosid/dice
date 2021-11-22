import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faDiceOne,
    faDiceTwo,
    faDiceThree,
    faDiceFour,
    faDiceFive,
    faDiceSix,
    faQuestion,
  } from "@fortawesome/free-solid-svg-icons";

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
      return faQuestion;
  }
};

const DiceIcon = (props) => {
  const icon = getIcon(props.number.toString());
  const size = props.size || "4x";

  const clickHandler = () => {
    props.onClick(props.number);
  };

  return <FontAwesomeIcon icon={icon} size={size} onClick={clickHandler} />;
};

export default React.memo(DiceIcon);
