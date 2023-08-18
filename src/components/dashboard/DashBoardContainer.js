import { Box, Button, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
import { tokens } from "../../theme";
import CardsContainer from "./cardsInformacion/CardsContainer";
import { useEffect } from "react";
import CardDetail from "./cardsDetail/CardDetail";
import RadarChart from "./charts/RadarChart";
import RecentMeals from "./recentMeals/RecentMeals"
const DashBoardContainer = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [dashboardDisplay, setDashboardDisplay] = useState("block");
  const [selectedCard, setSelectedCard] = useState(null);
  const [isBoxVisible, setIsBoxVisible] = useState(false);

  useEffect(() => {
    if (selectedCard) {
      setIsBoxVisible(true);
      setTimeout(() => {
        setDashboardDisplay("none");
      }, 900);
    }
  }, [selectedCard]);

  const handleBackArrow = () => {
    setDashboardDisplay("block");
    setSelectedCard(null);
    setIsBoxVisible(false);
  };
  return (
    <>
      <Box m="20px 20px 80px 20px">
        {dashboardDisplay == "none" && (
          <CardDetail
            selectedCard={selectedCard}
            setDashboardDisplay={handleBackArrow}
          />
        )}
        {/* HEADER */}
        <div
          style={{
            display: dashboardDisplay,
            opacity: isBoxVisible ? 0 : 1,
            transition: "opacity 0.9s ease-in-out",
          }}
        >
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            paddingBottom={2}
          >
            <Typography variant="h3">
              Entrenamiento de Hoy: X musculo{" "}
            </Typography>
            <Box paddingTop={1}>
              <Button
                sx={{
                  backgroundColor: colors.blueAccent[700],
                  color: colors.grey[100],
                  fontSize: "14px",
                  fontWeight: "bold",
                  padding: "10px 20px",
                }}
              >
                Download
              </Button>
            </Box>
          </Box>
          <Typography
            variant="h3"
            fontWeight="bold"
            color={colors.greenAccent[900]}
            borderBottom={`solid 1px ${colors.greenAccent[900]}`}
            marginBottom={2}
          >
            New content
          </Typography>
          {/* GRID & CHARTS */}
          <Box
            display="grid"
            gridTemplateColumns="repeat(12, 1fr)"
            gridAutoRows="220px"
            gap="20px"
          >
            {/* ROW 1 */}
            <Box
              gridColumn="span 12"
              backgroundColor={colors.primary[400]}
              display="flex"
              alignItems="center"
              justifyContent="center"
              overflow="hidden"
            >
              <CardsContainer
                setSelectedCard={setSelectedCard}
                data={[
                  {
                    id: 1,
                    nombre: "objeto1",
                    title: "Título 1",
                    caption: "Subtítulo 1",
                    description: "Descripción 1",
                  },
                  {
                    id: 2,
                    nombre: "objeto2",
                    title: "Título 2",
                    caption: "Subtítulo 2",
                    description: "Descripción 2",
                  },
                  {
                    id: 3,
                    nombre: "objeto3",
                    title: "Título 3",
                    caption: "Subtítulo 3",
                    description: "Descripción 3",
                  },
                  {
                    id: 4,
                    nombre: "objeto4",
                    title: "Título 4",
                    caption: "Subtítulo 4",
                    description: "Descripción 4",
                  },
                  {
                    id: 5,
                    nombre: "objeto5",
                    title: "Título 5",
                    caption: "Subtítulo 5",
                    description: "Descripción 5",
                  },
                  {
                    id: 6,
                    nombre: "objeto6",
                    title: "Título 6",
                    caption: "Subtítulo 6",
                    description: "Descripción 6",
                  },
                  {
                    id: 7,
                    nombre: "objeto7",
                    title: "Título 7",
                    caption: "Subtítulo 7",
                    description: "Descripción 7",
                  },
                  {
                    id: 8,
                    nombre: "objeto8",
                    title: "Título 8",
                    caption: "Subtítulo 8",
                    description: "Descripción 8",
                  },
                  {
                    id: 9,
                    nombre: "objeto9",
                    title: "Título 9",
                    caption: "Subtítulo 9",
                    description: "Descripción 9",
                  },
                  {
                    id: 10,
                    nombre: "objeto10",
                    title: "Título 10",
                    caption: "Subtítulo 10",
                    description: "Descripción 10",
                  },
                ]}
              />
            </Box>

            {/* ROW 2 */}
            <Box
              gridColumn="span 8"
              gridRow="span 3"
              backgroundColor={colors.primary[400]}
            >
              <Box height="100%">
                <RadarChart />
              </Box>
            </Box>
            <Box
              gridColumn="span 4"
              gridRow="span 3"
              backgroundColor={colors.primary[400]}
              overflow="auto"
            >
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                borderBottom={`4px solid ${colors.primary[500]}`}
                colors={colors.grey[100]}
                p="15px"
              >
                <Typography
                  color={colors.grey[100]}
                  variant="h5"
                  fontWeight="600"
                >
                  Recent meals
                </Typography>
              </Box>
              <RecentMeals />
            </Box>

            {/* ROW 3 */}
            <Box
              gridColumn="span 4"
              gridRow="span 2"
              backgroundColor={colors.primary[400]}
              p="30px"
            >
              <Typography variant="h5" fontWeight="600">
                Sales Products
              </Typography>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                mt="25px"
              ></Box>
            </Box>
            <Box
              gridColumn="span 8"
              gridRow="span 2"
              backgroundColor={colors.primary[400]}
            >
              <Typography
                variant="h5"
                fontWeight="600"
                sx={{ padding: "30px 30px 0 30px" }}
              >
                Train Quality
              </Typography>
              <Box height="250px" mt="-20px"></Box>
            </Box>
          </Box>
        </div>
      </Box>
    </>
  );
};

export default DashBoardContainer;
