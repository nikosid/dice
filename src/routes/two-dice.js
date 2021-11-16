import "../App.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

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
      <p>Coming Soon</p>
    </div>
  );
}

export default Twodice;
