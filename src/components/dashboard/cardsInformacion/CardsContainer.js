import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Typography,
  useTheme,
  Card,
  CardContent,
  Grid,
  CircularProgress,
} from "@mui/material";
import { tokens } from "../../../theme";
import { makeStyles } from "@material-ui/core";

const useStyles = (colors, isAnimating) =>
  makeStyles((theme) => ({
    card: {
      borderRadius: "5px 5px 25px 5px",
      backgroundColor: colors.blueAccent[900],
      boxShadow: "5px 5px 20px 0px",
    },
    cardContent: {
      padding: 0,
      height: 155,
    },
  }));
const CardsContainer = ({ data }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [dataState, setData] = useState([]); // Estado para almacenar los datos del endpoint
  const [groupedData, setGroupedData] = useState([]);
  const [counter, setCounter] = useState(0);
  const groupSize = 3;
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState(0); // 1 para deslizamiento hacia la izquierda, -1 para deslizamiento hacia la derecha

  const classes = useStyles(colors)(); // Aplicamos los estilos

  useEffect(() => {
    if (data.length && !groupedData.length) {
      setData(data);
      setCounter(0);
    }
    console.log(data);
  }, [data]);

  useEffect(() => {
    if (dataState.length) {
      const groupedArray = [];
      for (let i = 0; i < data.length; i += groupSize) {
        const group = data.slice(i, i + groupSize);
        groupedArray.push(group);
      }
      setGroupedData(groupedArray);
    }
  }, [dataState]);

  useEffect(() => {
    console.log(groupedData);
  }, [groupedData]);

  const handleNext = () => {
    setIsTransitioning(true);
    setDirection(1);
    setTimeout(() => {
      if (counter < groupedData.length - 1) {
        setCounter(counter + 1);
      } else {
        setCounter(0);
      }
      setDirection(0);
      setIsTransitioning(false);
    }, 80);
  };

  return (
    <Grid  container spacing={2} padding={2} style={{overFlow: "hidden"}}>
      {!groupedData.length ? (
        <CircularProgress />
      ) : (
        <>
          {groupedData[counter].map((e) => (
            <Grid
              style={{
                transform: `translateX(${direction * 100}%)`,
                transition: isTransitioning
                  ? "transform 0.10s ease-in-out"
                  : "transform 0.10s ease-in-out"
              }}
              item
              xs={4}
              key={e.id}
            >
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <div style={{ display: "flex" }}>
                    <img
                      style={{
                        width: 150,
                        height: 80,
                        borderRadius: "0px 0px 25px 0px",
                      }}
                      src="./assets/cardio.jfif"
                    />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        padding: "0px 0px 0px 10px",
                      }}
                    >
                      <Typography
                        color="whitesmoke"
                        style={{
                          borderBottom: "1px solid whitesmoke",
                          width: "200px",
                        }}
                      >
                        {e.title}
                      </Typography>
                      <Typography color="whitesmoke" variant="caption">
                        {e.caption}
                      </Typography>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      padding: "2px 5px 0px 5px",
                    }}
                  >
                    <div style={{ width: "78%" }}>
                      <Typography color="whitesmoke" variant="caption">
                        {e.description}
                      </Typography>
                    </div>
                    <Button
                      style={{
                        fontSize: 12,
                        padding: 5,
                        marginTop: 35,
                        margin: "38px -5px 15px 5px",
                      }}
                      color="secondary"
                    >
                      See more
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </>
      )}

      <Grid item xs={12} display="flex" justifyContent="flex-end">
        <Button variant="contained" onClick={handleNext}>
          Next
        </Button>
      </Grid>
    </Grid>
  );
};

export default CardsContainer;
