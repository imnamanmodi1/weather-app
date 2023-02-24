import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import axios from "axios";
import Notification from "./Notification";
import Weather from "./Weather";

function Search() {
  let [city, setCity] = useState("Kasol");
  let [weather, setWeather] = useState({
    coord: {
      lon: 77.3166,
      lat: 32.0104,
    },
    weather: [
      {
        id: 800,
        main: "Clear",
        description: "clear sky",
        icon: "01n",
      },
    ],
    base: "stations",
    main: {
      temp: 7.53,
      feels_like: 4.36,
      temp_min: 7.53,
      temp_max: 7.53,
      pressure: 1025,
      humidity: 56,
      sea_level: 1025,
      grnd_level: 844,
    },
    visibility: 10000,
    wind: {
      speed: 5.34,
      deg: 52,
      gust: 5.31,
    },
    clouds: {
      all: 0,
    },
    dt: 1677247344,
    sys: {
      country: "IN",
      sunrise: 1677201878,
      sunset: 1677242628,
    },
    timezone: 19800,
    id: 1262252,
    name: "Kasol",
    cod: 200,
  });
  let [msg, setMsg] = useState("Nothing to show");
  let [notify, setNotify] = useState(false);

  let handleCityChange = (e) => {
    setCity(e.target.value);
  };

  let handleFetchWeather = async (e) => {
    var config = {
      method: "get",
      url: `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=032398c5f02f397001e93f3096d7378b`,
      headers: {},
    };

    let showError = async (mesg) => {
      setMsg(mesg);
      setNotify(true);
    };

    axios(config)
      .then(function (response) {
        if (response.data && response.data.length === 0) {
          // show error
          showError(`No location found matching ${city}`);
        }
        let { name, lat, lon, country, state } = response.data[0];
        getWeatherDetails({
          latitude: lat,
          longitude: lon,
          city: name,
          state: state,
          country: country,
        });
      })
      .catch(function (error) {
        showError(`Something went wrong while searching for ${city}`);
      });
  };

  let getWeatherDetails = async (pa) => {
    var config = {
      method: "get",
      url: `https://api.openweathermap.org/data/2.5/weather?lat=${pa.latitude}&lon=${pa.longitude}&appid=032398c5f02f397001e93f3096d7378b&units=metric`,
      headers: {},
    };

    axios(config)
      .then(function (response) {
        response.data.name = city;
        setWeather(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <center>
        <TextField
          sx={{ width: "80%" }}
          id="outlined-basic"
          label="Search Any Location"
          variant="outlined"
          onChange={handleCityChange}
          value={city}
        />
        <Button
          sx={{ width: "19%", padding: "15px", margin: "1px" }}
          variant="contained"
          onClick={handleFetchWeather}
        >
          Get Weather
        </Button>
        <Weather weatherReport={weather} />
        <Notification message={msg} open={notify} />
      </center>
    </Stack>
  );
}

export default Search;
