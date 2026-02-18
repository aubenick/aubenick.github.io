import { makeStyles, shorthands } from "@fluentui/react-components";

export const homeButtonStyles = makeStyles({
  homePageButton: {
    ...shorthands.borderWidth("3px"),
    ...shorthands.borderStyle("solid"),
    ...shorthands.borderColor("white"),
    borderRadius: "8px",
    padding: "20px",
    transitionDuration: "0.2s", // Transition duration for Hover Effect

    // The hover state override
    ":hover": {
      backgroundColor: "#444444",
    },
    ":active": {
      transitionDuration: "0s",
      backgroundColor: "white !important",
      color: "black !important",
      ...shorthands.borderColor("white !important"),
    },
  },
});

export const simpleCardStyle = makeStyles({
  singleImage: {
    maxHeight: "60vh",
    width: "auto",
    borderRadius: "4%",
    border: "2px solid green",
    position: "absolute",

    ":hover": {
      zIndex: "100 !important",
    },
  },
});

export const basicButton = makeStyles({
  buttonStyle: {
    width: "200px",
    height: "200px",
    borderRadius: "8px",
    margin: "10px",
  },
});
