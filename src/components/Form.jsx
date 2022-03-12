import { Button, TextField, Grid, Box, makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";
import { getWeather } from "../service/api";
import Information from "./Information";
import Weather from "./Weather";

const useStyle = makeStyles((theme) => ({
  form: {
    backgroundColor: "#1E90FF",
    height: "100vh",
  },
}));

const Form = () => {
  const classes = useStyle();
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [click, handleClick] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    const weatherInfo = async () => {
      city &&
        (await getWeather(city, country).then((response) => {
          setData(response.data);
        }));
    };
    weatherInfo();
    handleClick(false);
  }, [click]);

  const handleCityChange = (city) => {
    setCity(city);
  };

  const handleCountryChange = (country) => {
    setCountry(country);
  };

  return (
    <Grid container>
      <Grid item lg={8} md={6} sm={4} xs={0}>
        <Weather data={data} city={city} country={country} />
      </Grid>
      <Grid item lg={4} md={6} sm={8} xs={12}>
        <Box className={classes.form}>
          <Box p={4}>
            <Grid container spacing={4}>
              <Grid item lg={4} md={4} sm={4} xs={4}>
                <TextField
                  label="Country"
                  onChange={(e) => handleCountryChange(e.target.value)}
                />
              </Grid>
              <Grid item lg={4} md={4} sm={4} xs={4}>
                <TextField
                  label="City"
                  onChange={(e) => handleCityChange(e.target.value)}
                />
              </Grid>
              <Grid item lg={4} md={4} sm={4} xs={4}>
                <Button
                  variant="contained"
                  color="secondary"
                  style={{ textTransform: "none" }}
                  onClick={() => handleClick(true)}
                >
                  Get Weather
                </Button>
              </Grid>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <Information data={data} city={city} country={country} />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Form;
