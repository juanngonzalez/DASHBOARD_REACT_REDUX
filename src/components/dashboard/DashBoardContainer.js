import { Box, Button, Typography, useTheme } from "@mui/material";
import React from "react";
import { tokens } from "../../theme";
import CardsContainer from "./cardsInformacion/CardsContainer";

const DashBoardContainer = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px 20px 80px 20px">
      {/* HEADER */}
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        paddingBottom={2}
      >
        <Typography variant="h3">Entrenamiento de Hoy: X musculo </Typography>
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
          
        >
          <CardsContainer data={[
  { id: 1, nombre: "objeto1", title: "Título 1", caption: "Subtítulo 1", description: "Descripción 1" },
  { id: 2, nombre: "objeto2", title: "Título 2", caption: "Subtítulo 2", description: "Descripción 2" },
  { id: 3, nombre: "objeto3", title: "Título 3", caption: "Subtítulo 3", description: "Descripción 3" },
  { id: 4, nombre: "objeto4", title: "Título 4", caption: "Subtítulo 4", description: "Descripción 4" },
  { id: 5, nombre: "objeto5", title: "Título 5", caption: "Subtítulo 5", description: "Descripción 5" },
  { id: 6, nombre: "objeto6", title: "Título 6", caption: "Subtítulo 6", description: "Descripción 6" },
  { id: 7, nombre: "objeto7", title: "Título 7", caption: "Subtítulo 7", description: "Descripción 7" },
  { id: 8, nombre: "objeto8", title: "Título 8", caption: "Subtítulo 8", description: "Descripción 8" },
  { id: 9, nombre: "objeto9", title: "Título 9", caption: "Subtítulo 9", description: "Descripción 9" },
  { id: 10, nombre: "objeto10", title: "Título 10", caption: "Subtítulo 10", description: "Descripción 10" },
]} />
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Protein
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                78,6
              </Typography>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Burned calories
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                723,6
              </Typography>
            </Box>
            <Box></Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0"></Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
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
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Recent
            </Typography>
          </Box>
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
    </Box>
  );
};

export default DashBoardContainer;
