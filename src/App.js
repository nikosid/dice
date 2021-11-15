import "./App.css";
import { useState } from "react";
import Dice from "./components/Dice";

function App() {
  const [diceOne, setDiceOne] = useState([0]);
  return (
    <div className="App">
      <div className="dice-container">
        <Dice number="1" />
        <Dice number="2" />
        <Dice number="3" />
        <Dice number="4" />
        <Dice number="5" />
        <Dice number="6" />
      </div>
    </div>
  );
}

export default App;
