// React
import React, {useState} from "react";

// React Google Maps API
import {Autocomplete} from "@react-google-maps/api";

// Material UI
import {AppBar, Toolbar, Typography, InputBase, Box} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

// styles
import useStyles from "./styles";

const Header = ({setCooordinates}) => {
  const classes = useStyles();
  const [autocomplete, setAutocomplete] = useState(null);

  const onLoad = (autoC) => setAutocomplete(autoC);
  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace.geometry.location.lat();
    const lng = autocomplete.getPlace.geometry.location.lng();

    setCooordinates({lat, lng});
  };

  return (
    <AppBar position="static" className={classes.appBar}>
      {/* AppBar é a barra de navegação */}
      <Toolbar className={classes.toolbar}>
        {/* Typography são os elementos de texto */}

        <Typography variant="h5" className={classes.title}>
          Travel Advisor
        </Typography>

        {/* Box é um container */}
        <Box display="flex" className={classes.exploreBox}>
          <Typography variant="h6" className={classes.textExplore}>
            Explore new places
          </Typography>
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search..."
                classes={{root: classes.inputRoot, input: classes.inputInput}}
              />
            </div>
          </Autocomplete>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
