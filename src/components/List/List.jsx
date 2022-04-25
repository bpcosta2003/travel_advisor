// React
import React, {useState, useEffect, createRef} from "react";

// Material UI
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";

// Components
import PlaceDetails from "../PlaceDetails/PlaceDetails";

// styles
import useStyles from "./styles";

const List = ({
  places,
  childClicked,
  isLoading,
  type,
  setType,
  rating,
  setRating,
}) => {
  const classes = useStyles();
  const [elRefs, setElRefs] = useState([]);

  useEffect(() => {
    // Refs fornecem uma maneira de acessar node DOM ou elementos React criados no método de render.
    // Array constructor passando a mesma quantidade de elementos do 'places'
    // .fill vai preencher a Array, e então usamos o .map para percorrer a array
    // _ serve para informar que não queremos o primeiro parametro mas sim o segundo
    // e então vai retornar o elRefs no index correspondente ou vai criar um novo Ref
    const refs = Array(places?.lenght)
      .fill()
      .map((_, i) => elRefs[i] || createRef());

    setElRefs(refs);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [places]);

  return (
    <div className={classes.container}>
      <Typography variant="h4" className={classes.text}>
        <strong>Restaurants</strong>, <strong>Hotels</strong> &
        <strong> Attractions </strong>
        around you!
      </Typography>
      {isLoading ? (
        <div className={classes.loading}>
          <CircularProgress size="5rem" />
        </div>
      ) : (
        <>
          <FormControl className={classes.formControl}>
            <InputLabel className={classes.textOpc}>Type</InputLabel>
            <Select
              value={type}
              onChange={(e) => {
                setType(e.target.value);
              }}
              className={classes.textOpc}
            >
              <MenuItem value="restaurants" className={classes.textOpc}>
                Restaurants
              </MenuItem>
              <MenuItem value="hotel" className={classes.textOpc}>
                Hotels
              </MenuItem>
              <MenuItem value="attractions" className={classes.textOpc}>
                Attractions
              </MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel className={classes.textOpc}>Rating</InputLabel>
            <Select
              value={rating}
              onChange={(e) => {
                setRating(e.target.value);
              }}
              className={classes.textOpc}
            >
              <MenuItem value={0} className={classes.textOpc}>
                All
              </MenuItem>
              <MenuItem value={3} className={classes.textOpc}>
                Above 3.0
              </MenuItem>
              <MenuItem value={4} className={classes.textOpc}>
                Above 4.0
              </MenuItem>
              <MenuItem value={4.5} className={classes.textOpc}>
                Above 4.5
              </MenuItem>
            </Select>
          </FormControl>
          <Grid container spacing={3} className={classes.list}>
            {/* ?. significa que só vai fazer o map caso tenha algo na lista */}
            {places?.map((place, i) => (
              <Grid item key={i} xs={12}>
                <PlaceDetails
                  place={place}
                  selected={Number(childClicked) === i}
                  refProp={elRefs[i]}
                  className={classes.listItems}
                />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </div>
  );
};

export default List;
