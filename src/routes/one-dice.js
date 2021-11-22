import { useState, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync } from "@fortawesome/free-solid-svg-icons";
import classes from "../App.module.css";
import Dice from "../components/Dice";
import Layout from "../components/Layout";

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

  const diceClickHandler = useCallback((diceNumber) => {
    setDiceValues((diceValues) => {
      return {
        ...diceValues,
        [diceNumber]: diceValues[diceNumber] + 1,
      };
    });
  }, []);

  const resetDice = () => {
    setDiceValues(DEFAULT_DICE_VALUES);
  };
  return (
    <Layout>
      <span className={classes["title"]}>One Dice Counter</span>
      <div className={classes["dice-reset"]}>
        <FontAwesomeIcon icon={faSync} size="lg" onClick={resetDice} />
      </div>
      <div className={classes["dice-container"]}>
        <Dice number="1" values={diceValues} onClick={diceClickHandler} />
        <Dice number="2" values={diceValues} onClick={diceClickHandler} />
        <Dice number="3" values={diceValues} onClick={diceClickHandler} />
        <Dice number="4" values={diceValues} onClick={diceClickHandler} />
        <Dice number="5" values={diceValues} onClick={diceClickHandler} />
        <Dice number="6" values={diceValues} onClick={diceClickHandler} />
      </div>
      </Layout>
  );
};

export default Onedice;
