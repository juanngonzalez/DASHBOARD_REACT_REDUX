import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { makeStyles } from "@material-ui/core";
import { Card, CardContent, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
const useStyles = (colors) =>
  makeStyles((theme) => ({
    mySwiper: {
      width: "100%",
      height: "100%",
    },
    card: {
      borderRadius: "5px  15px 55px 5px",
      background: `linear-gradient(to right, ${colors.primary[700]}, ${colors.primary[500]})`,
      boxShadow: "5px 5px 20px 0px",
      height: "fit-content",
      margin: "2px 5px 0px 0px",
    },
  }));
const data = [
  {
    id: 1,
    name: "Bife a la plancha con guarnicion",
    recipe:
      "2 tablespoons butter, melted 1 tablespoon reduced-sodium soy sauce 2 boneless skinless chicken breast halves (5 ounces each) 1 tablespoon grated Parmesan cheese 1/4 teaspoon Italian seasoning 1/4 teaspoon garlic salt 1/4 teaspoon paprika 2 tablespoons butter, melted 1 tablespoon reduced-sodium soy sauce 2 boneless skinless chicken breast halves (5 ounces each) 1 tablespoon grated Parmesan cheese 1/4 teaspoon Italian seasoning 1/4 teaspoon garlic salt 1/4 teaspoon paprika 2 tablespoons butter, melted 1 tablespoon reduced-sodium soy sauce 2 boneless skinless chicken breast halves (5 ounces each) 1 tablespoon grated Parmesan cheese 1/4 teaspoon Italian seasoning 1/4 teaspoon garlic salt 1/4 teaspoon paprika 2 tablespoons butter, melted 1 tablespoon reduced-sodium soy sauce 2 boneless skinless chicken breast halves (5 ounces each) 1 tablespoon grated Parmesan cheese 1/4 teaspoon Italian seasoning 1/4 teaspoon garlic salt 1/4 teaspoon paprika 2 tablespoons butter, melted 1 tablespoon reduced-sodium soy sauce 2 boneless skinless chicken breast halves (5 ounces each) 1 tablespoon grated Parmesan cheese 1/4 teaspoon Italian seasoning 1/4 teaspoon garlic salt 1/4 teaspoon paprika 2 tablespoons butter, melted 1 tablespoon reduced-sodium soy sauce 2 boneless skinless chicken breast halves (5 ounces each) 1 tablespoon grated Parmesan cheese 1/4 teaspoon Italian seasoning 1/4 teaspoon garlic salt 1/4 teaspoon paprika 2 tablespoons butter, melted 1 tablespoon reduced-sodium soy sauce 2 boneless skinless chicken breast halves (5 ounces each) 1 tablespoon grated Parmesan cheese 1/4 teaspoon Italian seasoning 1/4 teaspoon garlic salt 1/4 teaspoon paprika",
    macros: { carbs: 200, protein: 10, fibre: 20, calories: 200 },
    date: new Date(),
  },
  {
    id: 2,
    name: "Comida 2",
    recipe: "ingredientes",
    macros: { carbs: 200, protein: 10, fibre: 20, calories: 200 },
    date: new Date(),
  },
  {
    id: 3,
    name: "Comida 3",
    recipe: "ingredientes",
    macros: { carbs: 200, protein: 10, fibre: 20, calories: 200 },
    date: new Date(),
  },
  {
    id: 4,
    name: "Comida 4",
    recipe: "ingredientes",
    macros: { carbs: 200, protein: 10, fibre: 20, calories: 200 },
    date: new Date(),
  },
  {
    id: 5,
    name: "Comida 5",
    recipe: "ingredientes",
    macros: { carbs: 200, protein: 10, fibre: 20, calories: 200 },
    date: new Date(),
  },
  {
    id: 6,
    name: "Comida 6",
    recipe: "ingredientes",
    macros: { carbs: 200, protein: 10, fibre: 20, calories: 200 },
    date: new Date(),
  },
  {
    id: 7,
    name: "Comida 7",
    recipe: "ingredientes",
    macros: { carbs: 200, protein: 10, fibre: 20, calories: 200 },
    date: new Date(),
  },
  {
    id: 8,
    name: "Comida 8",
    recipe:
      "2 tablespoons butter, melted 1 tablespoon reduced-sodium soy sauce 2 boneless skinless chicken breast halves (5 ounces each) 1 tablespoon grated Parmesan cheese 1/4 teaspoon Italian seasoning 1/4 teaspoon garlic salt 1/4 teaspoon paprika 2 tablespoons butter, melted 1 tablespoon reduced-sodium soy sauce 2 boneless skinless chicken breast halves (5 ounces each) 1 tablespoon grated Parmesan cheese 1/4 teaspoon Italian seasoning 1/4 teaspoon garlic salt 1/4 teaspoon paprika 2 tablespoons butter, melted 1 tablespoon reduced-sodium soy sauce 2 boneless skinless chicken breast halves (5 ounces each) 1 tablespoon grated Parmesan cheese 1/4 teaspoon Italian seasoning 1/4 teaspoon garlic salt 1/4 teaspoon paprika 2 tablespoons butter, melted 1 tablespoon reduced-sodium soy sauce 2 boneless skinless chicken breast halves (5 ounces each) 1 tablespoon grated Parmesan cheese 1/4 teaspoon Italian seasoning 1/4 teaspoon garlic salt 1/4 teaspoon paprika 2 tablespoons butter, melted 1 tablespoon reduced-sodium soy sauce 2 boneless skinless chicken breast halves (5 ounces each) 1 tablespoon grated Parmesan cheese 1/4 teaspoon Italian seasoning 1/4 teaspoon garlic salt 1/4 teaspoon paprika 2 tablespoons butter, melted 1 tablespoon reduced-sodium soy sauce 2 boneless skinless chicken breast halves (5 ounces each) 1 tablespoon grated Parmesan cheese 1/4 teaspoon Italian seasoning 1/4 teaspoon garlic salt 1/4 teaspoon paprika 2 tablespoons butter, melted 1 tablespoon reduced-sodium soy sauce 2 boneless skinless chicken breast halves (5 ounces each) 1 tablespoon grated Parmesan cheese 1/4 teaspoon Italian seasoning 1/4 teaspoon garlic salt 1/4 teaspoon paprika",
    macros: { carbs: 200, protein: 10, fibre: 20, calories: 200 },
    date: new Date(),
  },
];
const RecentMeals = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const classes = useStyles(colors)();
  return (
    <div style={{ height: "90%", width: "100%" }}>
      <Swiper
        direction="vertical"
        slidesPerView={2}
        centeredSlides={false}
        spaceBetween={35}
        grabCursor={true}
        className={classes.mySwiper}
      >
        {data.map((e) => (
          <SwiperSlide>
            <Card className={classes.card}>
              <CardContent style={{ padding: 0 }}>
                <div>
                  <div style={{ padding: 10 }}>
                    <div
                      style={{
                        borderBottom: `solid 1px ${colors.blueAccent[800]}`,
                      }}
                    >
                      <Typography color="whitesmoke">{e.name}</Typography>
                      <div style={{ display: "flex" }}>
                        <AccessTimeIcon
                          style={{ color: "whitesmoke", marginRight: 10 }}
                        />
                        <Typography color="whitesmoke">
                          {e.date.toString().split("GMT")[0]}
                        </Typography>
                      </div>
                    </div>
                    <div style={{ maxHeight: 155, overflow: "auto" }}>
                      <Typography color="whitesmoke">{e.recipe}</Typography>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        borderTop: `solid 2px ${colors.blueAccent[800]}`,
                      }}
                    >
                      <Typography color="whitesmoke">
                        Carbs: {e.macros.carbs}
                      </Typography>
                      <Typography color="whitesmoke">
                        Protein: {e.macros.protein}
                      </Typography>
                      <Typography color="whitesmoke">
                        Fibre: {e.macros.fibre}
                      </Typography>
                      <Typography color="whitesmoke">
                        Calories: {e.macros.calories}
                      </Typography>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        borderTop: `solid 1px ${colors.blueAccent[800]}`,
                        justifyContent: "flex-end",
                        padding: "5px 5px 0px 0px",
                      }}
                    >
                      <DeleteIcon
                        fontSize="medium"
                        style={{ color: "whitesmoke", paddingRight: 10,  }}
                      />
                      <EditIcon
                        fontSize="medium"
                        style={{ color: "whitesmoke", paddingRight: 10,  }}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RecentMeals;
