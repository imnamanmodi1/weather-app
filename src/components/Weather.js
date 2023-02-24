import React from "react";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";

function Weather({ weatherReport }) {
  var lon = weatherReport.coord.lon;
  var lat = weatherReport.coord.lat;
  var weathermainicon =
    `https://openweathermap.org/img/wn/` +
    weatherReport.weather[0].icon +
    "@2x.png";
  var weatherdiscription = weatherReport.weather[0].description;
  var temp = weatherReport.main.temp;
  var pressure = weatherReport.main.pressure;
  var humidity = weatherReport.main.humidity;
  var wind = weatherReport.wind.speed;
  var country = weatherReport.sys.country;
  var city = weatherReport.name;

  return (
    <div>
      <CardContent sx={{ width: "100%" }}>
        <Box display="flex" flexDirection="row-reverse">
          <Box sx={{ width: "100%" }} p={0}>
            <img src={weathermainicon} width="100px" height="100px" alt="" />
            {/* <Typography variant="h6" color="textSecondary">
              {weatherdiscription}
            </Typography> */}
          </Box>
        </Box>
      </CardContent>
      <CardContent sx={{ width: "50%", display: "inline-block" }}>
        <Box display="flex" flexDirection="row">
          <Box p={1}>
            <Typography variant="h2" color="textPrimary">
              {city},{country}
            </Typography>
            <Typography variant="caption" color="textSecondary">
              {lon}, {lat}
            </Typography>
          </Box>
        </Box>
      </CardContent>
      <CardContent sx={{ width: "50%", display: "inline-block" }}>
        <Box display="flex" flexDirection="row-reverse">
          <Box p={0}>
            <Typography variant="h4" color="textPrimary">
              Temp: {temp}
              <span>&#176;</span>
              {"C"}
            </Typography>
          </Box>
        </Box>
      </CardContent>
      <CardContent sx={{ width: "50%", display: "inline-block" }}>
        <Box display="flex" flexDirection="row">
          <Box p={1}>
            <Typography variant="h6" color="textPrimary">
              Humidity: {humidity} %
            </Typography>
          </Box>
          <Box p={1}>
            <Typography variant="h6" color="textPrimary">
              pressure: {pressure} pa
            </Typography>
          </Box>
          <Box p={1}>
            <Typography variant="h6" color="textPrimary">
              wind: {wind} km/h
            </Typography>
          </Box>
        </Box>
      </CardContent>
      <CardContent sx={{ width: "50%", display: "inline-block" }}>
        <Box display="flex" flexDirection="row-reverse">
          <Box p={0}>
            <Typography variant="h6" color="textSecondary">
              {weatherdiscription}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </div>
  );
}

export default Weather;
