import "../App.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faDiceOne,
  faDiceTwo,
  faDiceThree,
  faDiceFour,
  faDiceFive,
  faDiceSix,
  faSync,
} from "@fortawesome/free-solid-svg-icons";

function Twodice() {
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
      <span className="title">Two Dice Counter</span>
      <div className="dice-reset">
        <FontAwesomeIcon icon={faSync} size="lg" />
      </div>
      <div className="dice-two-container">
        <div className="dice-two-container-inner-left">
          <div className="dice-two">
            <FontAwesomeIcon icon={faDiceOne} size="2x" />
          </div>
          <div className="dice-two">
            <FontAwesomeIcon icon={faDiceTwo} size="2x" />
          </div>
          <div className="dice-two">
            <FontAwesomeIcon icon={faDiceThree} size="2x" />
          </div>
          <div className="dice-two">
            <FontAwesomeIcon icon={faDiceFour} size="2x" />
          </div>
          <div className="dice-two">
            <FontAwesomeIcon icon={faDiceFive} size="2x" />
          </div>
          <div className="dice-two">
            <FontAwesomeIcon icon={faDiceSix} size="2x" />
          </div>
        </div>
        <div className="dice-two-container-inner-right">
          <ul className="dice-two-list">
            <li className="dice-two-list-item">
              <FontAwesomeIcon icon={faDiceOne} size="xs" />
              <span className="plus-sign">+</span>
              <FontAwesomeIcon icon={faDiceOne} size="xs" />
              <span className="plus-sign">=</span>10
            </li>
            <li className="dice-two-list-item">
              <FontAwesomeIcon icon={faDiceOne} size="xs" />
              <span className="plus-sign">+</span>
              <FontAwesomeIcon icon={faDiceOne} size="xs" />
              <span className="plus-sign">=</span>5
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Twodice;
