// React
import React, {useState, useEffect} from "react";

// Material UI
import {CssBaseline, Grid} from "@material-ui/core";

// Components
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";

// API function
import {getPlacesData, getWeatherData} from "./api";

const App = () => {
  const [places, setPlaces] = useState([]);
  const [weatherData, setWeatherData] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [coordinates, setCooordinates] = useState({});
  const [bounds, setBounds] = useState({});

  const [childClicked, setChildClicked] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");

  // Vai executar somente 1 vez ( no começo )
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      // Coordenadas do usuário usando 'geolocation API'
      ({coords: {latitude, longitude}}) => {
        setCooordinates({lat: latitude, lng: longitude});
      }
    );
  }, []);

  // Vai executar somente quando o 'rating' mudar
  useEffect(() => {
    // .filter() É o processo de percorrer uma array e incluir ou excluir elementos dentro dessa array com base em uma condição que você fornece.
    const filteredPlaces = places.filter((place) => place.rating > rating); // place.rating é maior do que o 'current' rating ? Se sim retorne o 'place'
    setFilteredPlaces(filteredPlaces);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rating]);

  // Vai executar sempre que mudar o type, coordinates e o bounds
  // useEffect chamando a API e esperando um 'data', e no fim atribuimos ao places com o setPlaces
  useEffect(() => {
    if (bounds.sw && bounds.ne) {
      // somente se tivermos o bounds.sw && bounds.ne executaremos o bloco de código
      setIsLoading(true);

      getWeatherData(coordinates.lat, coordinates.lng).then((data) =>
        setWeatherData(data)
      );

      getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
        // .then retorna uma Promise que é o 'data' da API
        setPlaces(data?.filter((place) => place.name && place.num_reviews > 0)); // o 'place' tem um nome ? tem um numero de reviews > 0, se sim pegue o 'place'
        setFilteredPlaces([]);
        setIsLoading(false);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type, bounds]);

  return (
    <>
      <CssBaseline />
      <Header setCooordinates={setCooordinates} />
      <Grid container style={{width: "100%"}}>
        {/* xs={12} quer dizer que vai ocupar toda a tela em mobile devices */}
        {/* md={4} & md={8} tamanho para outros dispositivos sem ser mobile */}
        <Grid item xs={12} md={4}>
          <List
            places={filteredPlaces.length ? filteredPlaces : places} // Se tivermos o filteredPlaces.length retorne o 'filteredPlaces', caso contrário retorne 'places'
            childClicked={childClicked}
            isLoading={isLoading}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCooordinates={setCooordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            places={filteredPlaces.length ? filteredPlaces : places} // Se tivermos o filteredPlaces.length retorne o 'filteredPlaces', caso contrário retorne 'places'
            setChildClicked={setChildClicked}
            weatherData={weatherData}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
