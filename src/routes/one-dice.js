import "../App.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync, faHome } from "@fortawesome/free-solid-svg-icons";
import Dice from "../components/Dice";

const DEFAULT_DICE_VALUES = {
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
};

const Onedice = () => {
  const [diceValues, setDiceValues] = useState(DEFAULT_DICE_VALUES);

  const diceClickHandler = (diceNumber) => {
    setDiceValues({
      ...diceValues,
      [diceNumber]: diceValues[diceNumber] + 1,
    });
  };

  const resetDice = () => {
    setDiceValues(DEFAULT_DICE_VALUES);
  };
  return (
    <div className="App">
      <Link to="/" className="icon-home">
        <FontAwesomeIcon icon={faHome} />
      </Link>
      <nav
        style={{
          paddingBottom: "1rem",
        }}
      >
        <Link to="/one-dice">One Dice</Link>{" "}
        <Link to="/two-dice">Two Dice</Link>
      </nav>
      <span className="title">One Dice Counter</span>
      <div className="dice-container">
        <Dice number="1" values={diceValues} onClick={diceClickHandler} />
        <Dice number="2" values={diceValues} onClick={diceClickHandler} />
        <Dice number="3" values={diceValues} onClick={diceClickHandler} />
        <Dice number="4" values={diceValues} onClick={diceClickHandler} />
        <Dice number="5" values={diceValues} onClick={diceClickHandler} />
        <Dice number="6" values={diceValues} onClick={diceClickHandler} />
      </div>
      <div className="dice-reset">
        <FontAwesomeIcon icon={faSync} size="2x" onClick={resetDice} />
      </div>
    </div>
  );
};

export default Onedice;
