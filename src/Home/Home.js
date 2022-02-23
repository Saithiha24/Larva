import { makeStyles, Typography, Button } from "@material-ui/core";
import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <div className={classes.home}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: "100%",
          flexDirection: "column",
        }}
      >
        <Typography variant="h3" className={classes.title}>
          Larvia
        </Typography>
        <div
          style={{
            marginTop: 250,
            width: "100%",
          }}
        >
          <ul
            style={{
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            {items.map((item) => (
              <li key={item.text}>
                <Button
                  onClick={() => navigate(item.path)}
                  className={classes.button}
                  variant="contained"
                  color="secondary"
                >
                  {item.text}
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
const useStyles = makeStyles((theme) => {
  return {
    home: {
      backgroundImage:
        "url(https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)",
      width: "100%",
      height: "100vh",
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    title: {
      color: "whitesmoke",
      fontFamily: "worksan",
      letterSpacing: 3,
      fontWeight: 800,
    },
    button: {
      width: 150,
      height: 50,
      [theme.breakpoints.down("xs")]: {
        width: 80,
        height: 40,
      },
    },
  };
});
const items = [
  { text: "Anime", path: "/component/anime" },
  { text: "Movie", path: "/component/movie" },
  { text: "Show", path: "/component/show" },
];
