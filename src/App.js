import "./App.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiceFive, faDice } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App">
      <nav
        style={{
          paddingBottom: "1rem",
        }}
      >
        <div className="nav-wrapper">
          <div className="nav-item">
            <Link to="/one-dice">
              <div>
                <FontAwesomeIcon icon={faDiceFive} size="2x" />
              </div>
              <div>One Dice</div>
            </Link>
          </div>
          <div className="nav-item">
            <Link to="/two-dice">
              <div>
                <FontAwesomeIcon icon={faDice} size="2x" />
              </div>
              <div>Two Dice</div>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;
