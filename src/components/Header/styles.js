import {alpha, makeStyles} from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#227DFC",
  },
  title: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
    fontFamily: "Amaranth, sans-serif",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    transition: "0.3s",
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
      transition: "0.3s",
    },
    marginRight: theme.spacing(3),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {marginLeft: theme.spacing(3), width: "auto"},
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
    fontFamily: "Amaranth, sans-serif",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {width: "20ch"},
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      flexDirection: "column",
    },
  },
  textExplore: {
    [theme.breakpoints.down("sm")]: {
      marginBottom: "5px",
    },
    fontFamily: "Amaranth, sans-serif",
  },
  exploreBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      margin: "20px",
    },
  },
}));
