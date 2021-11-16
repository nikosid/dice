import { useState } from "react";
import "./App.css";
import Dice from "./components/Dice";

function App() {

  const [diceValues, setDiceValues] = useState({
    "1": 0,
    "2": 0,
    "3": 0,
    "4": 0,
    "5": 0,
    "6": 0,
  });

  const onDiceClickHandler = (diceNumber) => {
    setDiceValues({
      ...diceValues,
      [diceNumber]: diceValues[diceNumber] + 1,
    });
  }

  return (
    <div className="App">
      <h1>Dice Counter</h1>
      <div className="dice-container">
        <Dice number="1" values={diceValues} onClick={onDiceClickHandler} />
        <Dice number="2" values={diceValues} onClick={onDiceClickHandler} />
        <Dice number="3" values={diceValues} onClick={onDiceClickHandler} />
        <Dice number="4" values={diceValues} onClick={onDiceClickHandler} />
        <Dice number="5" values={diceValues} onClick={onDiceClickHandler} />
        <Dice number="6" values={diceValues} onClick={onDiceClickHandler} />
      </div>
    </div>
  );
}

export default App;
