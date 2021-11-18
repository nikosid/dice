import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync } from "@fortawesome/free-solid-svg-icons";
import classes from "../App.module.css";
import DiceIcon from "../components/DiceIcon";
import Layout from "../components/Layout";

const DEFAULT_DICE_VALUES = {
  11: 0,
  12: 0,
  13: 0,
  14: 0,
  15: 0,
  16: 0,
  22: 0,
  23: 0,
  24: 0,
  25: 0,
  26: 0,
  33: 0,
  34: 0,
  35: 0,
  36: 0,
  44: 0,
  45: 0,
  46: 0,
  55: 0,
  56: 0,
  66: 0,
};

const Twodice = () => {
  const [diceValues, setDiceValues] = useState(DEFAULT_DICE_VALUES);
  const [choises, setChoises] = useState([]);
  const diceClickHandler = (value) => {
    setChoises((choises) => [...choises, value]);
    if (choises.length === 1) {
      let key = `${choises[0]}${value}`;
      if (!(key in DEFAULT_DICE_VALUES)) {
        key = `${value}${choises[0]}`;
      }
      setDiceValues((diceValues) => {
        return {
          ...diceValues,
          [key]: diceValues[key] + 1,
        };
      });
      setTimeout(() => {
        setChoises([]);
      }, 150);
    }
  };

  const resetDice = () => {
    setDiceValues(DEFAULT_DICE_VALUES);
  };

  let results = [];
  for (const key in diceValues) {
    if (Object.hasOwnProperty.call(diceValues, key)) {
      const element = diceValues[key];
      if (element > 0) {
        results.push({ firstDice: key[1], secondDice: key[0], value: element });
      }
    }
  }

  return (
    <Layout>
      <span className={classes["title"]}>Two Dice Counter</span>
      <div className={classes["dice-reset"]}>
        <FontAwesomeIcon icon={faSync} size="lg" onClick={resetDice} />
      </div>
      <div className={classes["dice-two-container"]}>
        <div className={classes["dice-two-container-inner-left"]}>
          {[1, 2, 3, 4, 5, 6].map((value) => {
            return (
              <div
                className={`${classes["dice-two"]} ${
                  choises.includes(value) ? classes.active : ""
                }`}
                key={`dice-${value}`}
              >
                <DiceIcon number={value} size="3x" onClick={diceClickHandler} />
              </div>
            );
          })}
        </div>
        <div className={classes["dice-two-container-inner-right"]}>
          {results
            .sort((a, b) => {
              if (a.value < b.value) {
                return 1;
              }
              if (a.value > b.value) {
                return -1;
              }
              if (a.firstDice > b.firstDice) {
                return -1;
              }
              if (a.firstDice === b.firstDice && a.secondDice > b.secondDice) {
                return -1;
              }
              return 0;
            })
            .map((line) => {
              return (
                <div
                  className={classes["dice-two-list-item"]}
                  key={`result-${line["firstDice"]}${line["secondDice"]}`}
                >
                  <DiceIcon number={line["firstDice"]} size="sm" />
                  <span>+</span>
                  <DiceIcon number={line["secondDice"]} size="sm" />
                  <span>={line["value"]}</span>
                </div>
              );
            })}
        </div>
      </div>
    </Layout>
  );
};

export default Twodice;
