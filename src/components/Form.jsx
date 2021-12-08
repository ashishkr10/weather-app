import {
  Button,
  makeStyles,
  TextField,
  Typography,
  Grid,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import { getWeather } from "../service/api";
import Information from "./Information";

const useStyle = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(2),
      padding: theme.spacing(1),
    },
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
    <>
      <Grid container>
        <Grid className={classes.root}>
          <Grid>
            <Typography variant="h4" style={{ color: "#343634" }}>
              Welcome to Weather App!!
            </Typography>
          </Grid>
          <Grid p={200}>
            <TextField
              label="City"
              margin="normal"
              fullWidth="true"
              inputProps={{ style: { fontSize: 18 } }}
              InputLabelProps={{ style: { fontSize: 18 } }}
              onChange={(e) => handleCityChange(e.target.value)}
            />
          </Grid>
          <Grid>
            <TextField
              label="Country"
              margin="normal"
              fullWidth="true"
              inputProps={{ style: { fontSize: 18 } }}
              InputLabelProps={{ style: { fontSize: 18 } }}
              onChange={(e) => handleCountryChange(e.target.value)}
            />
          </Grid>
          <Grid>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              onClick={() => handleClick(true)}
              style={{ textTransform: "none", borderRadius: 10 }}
            >
              Get Weather
            </Button>
          </Grid>
        </Grid>
        <Grid>
          <Information data={data} city={city} country={country} />
        </Grid>
      </Grid>
    </>
  );
};

export default Form;
