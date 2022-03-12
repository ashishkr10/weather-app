import { Box, makeStyles, Typography } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import FlareIcon from "@material-ui/icons/Flare";
import OpacityIcon from "@material-ui/icons/Opacity";
import Brightness5Icon from "@material-ui/icons/Brightness5";
import Brightness6Icon from "@material-ui/icons/Brightness6";
import DehazeIcon from "@material-ui/icons/Dehaze";
import CloudIcon from "@material-ui/icons/Cloud";
import VisibilityIcon from "@material-ui/icons/Visibility";
import SpeedIcon from "@material-ui/icons/Speed";

const useStyles = makeStyles({
  row: {
    padding: 8,
    fontSize: "1rem",
    letterSpacing: 2,
  },
  value: {
    color: "#FFFAFA",
    fontSize: "1rem",
  },
  icon: {
    color: "red",
    marginRight: "1rem",
    fontSize: "1rem,",
  },
  error: {
    background: "red",
    color: "#fff",
    margin: 50,
    padding: 20,
  },
});

const Information = ({ data, city, country }) => {
  const classes = useStyles();

  const getCloudsData = (value) => {
    if (value === 0) {
      return "Clear";
    } else if (value > 1 && value < 100) {
      return "Partially Cloudy";
    } else {
      return "Cloudy";
    }
  };

  return data && city && country ? (
    <Box p={2}>
      <Typography variant="h5" gutterBottom style={{ color: "#FFFFE0" }}>
        Weather Details
      </Typography>
      <Typography className={classes.row}>
        <LocationOnIcon className={classes.icon} />
        Location:{" "}
        <Box className={classes.value} component="span">
          {data.name}, {data.sys.country}{" "}
        </Box>
      </Typography>

      <Typography className={classes.row}>
        <FlareIcon className={classes.icon} />
        Temperature:{" "}
        <Box className={classes.value} component="span">
          {data.main.temp}°C{" "}
        </Box>
      </Typography>

      <Typography className={classes.row}>
        <VisibilityIcon className={classes.icon} />
        Visibility:{" "}
        <Box className={classes.value} component="span">
          {data.visibility / 1000}
          {" Km"}
        </Box>
      </Typography>

      <Typography className={classes.row}>
        <OpacityIcon className={classes.icon} />
        Humidity:{" "}
        <Box className={classes.value} component="span">
          {data.main.humidity}%{" "}
        </Box>
      </Typography>

      <Typography className={classes.row}>
        <Brightness5Icon className={classes.icon} />
        Sun Rise:{" "}
        <Box className={classes.value} component="span">
          {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}{" "}
        </Box>
      </Typography>

      <Typography className={classes.row}>
        <Brightness6Icon className={classes.icon} />
        Sun Set:{" "}
        <Box className={classes.value} component="span">
          {new Date(data.sys.sunset * 1000).toLocaleTimeString()}{" "}
        </Box>
      </Typography>

      <Typography className={classes.row}>
        <SpeedIcon className={classes.icon} />
        Wind Speed:{" "}
        <Box className={classes.value} component="span">
          {data.wind.speed}
          {"Km/h"}
        </Box>
      </Typography>

      <Typography className={classes.row}>
        <DehazeIcon className={classes.icon} />
        Condition:{" "}
        <Box className={classes.value} component="span">
          {data.weather[0].main}{" "}
        </Box>
      </Typography>

      <Typography className={classes.row}>
        <CloudIcon className={classes.icon} />
        Clouds:{" "}
        <Box className={classes.value} component="span">
          {getCloudsData(data.clouds.all)}{" "}
        </Box>
      </Typography>
    </Box>
  ) : !(city && country) ? (
    <Typography className={classes.error}>
      Please Enter the Name of City and Country to check Weather
    </Typography>
  ) : (
    ""
  );
};

export default Information;
