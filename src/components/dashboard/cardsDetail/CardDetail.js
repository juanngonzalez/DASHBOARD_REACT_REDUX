import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  useTheme,
  Paper,
  AccordionSummary,
  Accordion,
  AccordionDetails,
  Button,
  Grid,
} from "@mui/material";
import { ArrowBack, ExpandMore } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core";
import { tokens } from "../../../theme";

const useStyles = (colors, showDetail) =>
  makeStyles((theme) => ({
    card: {
      background: `linear-gradient(to right, ${colors.primary[700]}, ${colors.primary[500]})`,
      margin: 20,
      borderRadius: 30,
    },
    cardDetail: {
      opacity: showDetail ? 1 : 0,
        transition: "opacity 1s ease", // Añade una transición suave
    },
    image: {
      height: 280,
      width: 320,
      borderRadius: "30px 0px 60px 0px",
    },
    accordionDetails: {
      background: `linear-gradient(to right, ${colors.primary[700]}, ${colors.primary[500]})`, // Cambia el color del fondo aquí
      color: "white", // Cambia el color del texto aquí
      padding: theme.spacing(1), // Añade espacio interno al contenido
      marginTop:10
    },
    wishButton: {
      color: colors.blueAccent[500],
      "&:hover": {
        border: `solid 1px ${colors.blueAccent[300]}`,
        color: colors.blueAccent[300]
      }
    },
    itineraryButton:{
      color: colors.grey[300],
      "&:hover": {
        border: `solid 1px ${colors.grey[100]}`,
        color: colors.grey[100]
      }
    },
    addButton:{
      backgroundColor:colors.blueAccent[800]
    }
  }));

const CardDetail = ({ selectedCard, setDashboardDisplay }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [showDetail, setShowDetail] = useState(false);
  const classes = useStyles(colors, showDetail)();

  useEffect(() => {
    // Desactivar el desenfoque después de 1 segundo para mostrar gradualmente el contenido nítido
    const timer = setTimeout(() => {
      setShowDetail(true);
    }, 70);

    // Limpieza del temporizador cuando el componente se desmonte
    return () => clearTimeout(timer);
  }, []);
  return (
    <Box className={`${classes.cardDetail} ${showDetail ? "" : "hidden"}`}>
      <ArrowBack onClick={() => setDashboardDisplay("block")} />
      <Paper className={classes.card}>
        <Grid container style={{borderBottom: `solid 1px ${colors.blueAccent[900]}`}} >
          <Grid item xs={4}>
            <img className={classes.image} src="./assets/cardio.jfif" />
          </Grid>
          <Grid
            item
            xs={8}
            style={{ display: "flex", flexDirection: "column", padding: "10px 0px 10px 45px" }}
          >
            <div>
              <Typography textAlign="center" color="whitesmoke">
                {selectedCard.title}
              </Typography>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  overflow: "auto",
                  padding: 10,
                  minHeight: 250
                }}
              >
                <Typography color="whitesmoke">
                  captioncaptioncaption... captioncaptioncaption...
                  captioncaptioncaption... captioncaptioncaption...
                  captioncaptioncaption... captioncaptioncaption...
                  captioncaptioncaption... captioncaptioncaption...
                  captioncaptioncaption... captioncaptioncaption...
                  captioncaptioncaption... captioncaptioncaption...
                </Typography>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "0px 10px 10px -10px",
                width: "100%"
              }}
            >
              <Button variant="outlined" className={classes.wishButton}>Add to wish list</Button>
              <Button variant="outlined" className={classes.itineraryButton}>See itinerary</Button>
              <Button variant="contained" className={classes.addButton}>
                Add to do list (17:30 3 days per week)
              </Button>
            </div>
          </Grid>
        </Grid>
        <div>
          <Accordion className={classes.accordionDetails}>
            <AccordionSummary
            
              expandIcon={<ExpandMore />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails >
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <div>
          <Accordion className={classes.accordionDetails}>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <div>
          <Accordion className={classes.accordionDetails}>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </Paper>
    </Box>
  );
};

export default CardDetail;
