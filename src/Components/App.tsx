import { Button, makeStyles, shorthands } from "@fluentui/react-components";
import { homeButtonStyles } from "../styles";
import { useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();
  const styles = homeButtonStyles();

  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        display: "flex",
        gap: "20px",
      }}
    >
      <Button
        className={styles.homePageButton}
        onClick={() => navigate("/simple")}
      >
        Simple
      </Button>
      <Button
        className={styles.homePageButton}
        onClick={() => navigate("/map")}
      >
        Map (WIP)
      </Button>
    </div>
  );
}
