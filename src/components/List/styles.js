import {makeStyles} from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  formControl: {
    marginRight: theme.spacing(2),
    minWidth: "100%",
    marginBottom: "30px",
  },
  textOpc: {
    fontFamily: "Amaranth, sans-serif",
  },
  text: {
    marginBottom: "30px",
    fontFamily: "Amaranth, sans-serif",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  loading: {
    height: "600px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    padding: "25px",
  },
  marginBottom: {
    marginBottom: "30px",
  },
  list: {
    height: "75vh",
    overflow: "auto",
  },
  listItems: {
    fontFamily: "Amaranth, sans-serif",
  },
}));
