import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import classes from "../App.module.css";

const Layout = (props) => {

  return (
    <div className={classes.App}>
      <Link to="/" className={classes["icon-home"]}>
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
      {props.children}
    </div>
  );
};

export default Layout;
