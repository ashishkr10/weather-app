import { Box, Container, makeStyles } from "@material-ui/core";
import Form from "./Form";
import Navbar from "./Navbar";

const useStyles = makeStyles({
  container: {
    background: "linear-gradient(to bottom , #00eaff, #e3ba40)",
    marginTop: "5rem",
    borderRadius: "2rem",
  },
});

const Weather = () => {
  const classes = useStyles();
  return (
    <Box>
      <Navbar />
      <Box mx={2}>
        <Container className={classes.container}>
          <Form />
        </Container>
      </Box>
    </Box>
  );
};

export default Weather;
