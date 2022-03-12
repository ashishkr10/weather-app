import {
  Box,
  Grid,
  makeStyles,
  useTheme,
  useMediaQuery,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import img from "../images/weather.jpg";

const useStyle = makeStyles((theme) => ({
  form: {
    backgroundColor: "#1E90FF",
    height: "100vh",
  },

  img: {
    margin: "auto",
    display: "flex",
    maxWidth: "100%",
    maxHeight: "100%",
    height: "100vh",
  },
  cardcontent: {
    padding: 0,
    "&:last-child": {
      paddingBottom: 0,
    },
  },
}));

const Weather = ({ data, city, country }) => {
  const classes = useStyle();
  const theme = useTheme();
  const showImg = useMediaQuery(theme.breakpoints.up("sm"));

  return data && city && country ? (
    <>
      <Grid container>
        {showImg && (
          <Card style={{ boxShadow: "none", borderRadius: 0 }}>
            <CardContent className={classes.cardcontent}>
              <Box style={{ position: "relative" }}>
                <CardMedia
                  component="img"
                  className={classes.img}
                  image={img}
                />
                <Typography
                  variant="h5"
                  style={{
                    position: "absolute",
                    color: "white",
                    top: 30,
                    left: "5%",
                  }}
                >
                  weather app
                </Typography>
                <Typography
                  variant="h4"
                  color="primary"
                  style={{
                    position: "absolute",
                    // color: "white",
                    bottom: 150,
                    left: "10%",
                  }}
                >
                  <Box className={classes.value} component="span">
                    {data.main.temp}°C{" "}
                  </Box>
                </Typography>
                <Typography
                  variant="h4"
                  color="secondary"
                  style={{
                    position: "absolute",
                    // color: "white",
                    bottom: 100,
                    left: "10%",
                  }}
                >
                  <Box className={classes.value} component="span">
                    {data.name}, {data.sys.country}{" "}
                  </Box>
                </Typography>
              </Box>
            </CardContent>
          </Card>
        )}
      </Grid>
    </>
  ) : (
    <Grid container>
      {showImg && (
        <Card style={{ boxShadow: "none", borderRadius: 0 }}>
          <CardContent className={classes.cardcontent}>
            <Box style={{ position: "relative" }}>
              <CardMedia component="img" className={classes.img} image={img} />
              <Typography
                variant="h5"
                style={{
                  position: "absolute",
                  color: "white",
                  top: 30,
                  left: "5%",
                }}
              >
                weather app
              </Typography>
            </Box>
          </CardContent>
        </Card>
      )}
    </Grid>
  );
};

export default Weather;
