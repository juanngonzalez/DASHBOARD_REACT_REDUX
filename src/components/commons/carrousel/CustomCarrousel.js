import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import { useTheme } from "@mui/material/styles";
import { tokens } from "../../../theme";

const useStyles = makeStyles((theme) => ({
  
}));

const CustomCarrousel = ({ items }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const classes = useStyles();

  const swiperSettings = {
    spaceBetween: 10, 
    slidesPerView: "auto", 
  };

  return (
    <div className={classes.swiperContainer}>
      <Swiper {...swiperSettings} className={classes.swiper}>
        <Box
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          gap="20px"
          className={classes.boxContainer}
        >
          {items.map((item, index) => (
            <Box
            className={classes.boxChild}
              key={item.id}
              gridColumn="span 4"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <SwiperSlide >
                <Card >
                  <CardContent >
                    <img src={item.image}/>
                  </CardContent>
                </Card>
              </SwiperSlide>
            </Box>
          ))}
        </Box>
      </Swiper>
    </div>
  );
};

export default CustomCarrousel;
