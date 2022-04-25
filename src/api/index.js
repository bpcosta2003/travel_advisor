import axios from "axios";

export const getPlacesData = async (type, sw, ne) => {
  try {
    const {
      data: {data},
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: sw.lat, // sudoeste
          tr_latitude: ne.lat, // nordeste
          bl_longitude: sw.lng, // sudoeste
          tr_longitude: ne.lng, // nordeste
        },
        headers: {
          "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
          "x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_API_KEY,
        },
      }
    );

    return data;
  } catch (e) {
    console.error(e);
  }
};

export const getWeatherData = async (lat, lng) => {
  try {
    const {data} = await axios.get(
      "https://community-open-weather-map.p.rapidapi.com/weather",
      {
        params: {lat: lat, lon: lng},
        headers: {
          "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
          "x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_API_KEY,
        },
      }
    );
    return data;
  } catch (e) {
    console.error(e);
  }
};
