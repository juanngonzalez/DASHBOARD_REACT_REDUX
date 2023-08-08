import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";
import {
  Button,
  Paper,
  CircularProgress,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FormikTextField from "../commons/formik/FormikTextField";
import { useSelector } from "react-redux";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
const useStyles = (colors) => makeStyles((theme) => ({
  loginContainer: {
    display: "flex",
    justifyContent: "center",
    height: "100vh",
    width: "100vw",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: 300,
    borderRadius: 10,
    height: "fit-content",
    padding: "15px 20px 10px 20px",
    marginTop: "20vh",
    backgroundColor: colors.primary[500]
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    "& label": {
      fontSize: 17.3,
      fontWeight: 600,
    },
  },
  form: {
    width: "100%",
  },

  button: {
    marginTop: 20,
    backgroundColor: `${theme.palette.primary.gradientLogin2}`,
  },
  logo: {
    height: 100,
  },
}));

const validationSchema = yup.object({
  mail: yup
    .string()
    .max(100, "El campo no puede superar los 100 caracteres")
    .required("Campo obligatorio"),
  contraseña: yup
    .string()
    .min(6, "La contraseña debe tener un mínimo de 6 caracteres")
    .required("Campo obligatorio"),
});

const initialValues = {
  mail: "",
  contraseña: "",
};

const Login = ({ handleSubmit }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode)
  const classes = useStyles(colors)();
  const loading = useSelector((state) => state.auth.loading);
  const activeToken = useSelector((state) => state.auth.activeToken);
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const loadingToken = activeToken ? activeToken.loading : false;

  return (
    <div className={classes.loginContainer}>
      <Paper className={classes.paper} elevation={15}>
        <img src="/assets/staydark.png" alt="logo" className={classes.logo} />
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
        >
          <Form className={classes.form}>
            <div className={classes.inputContainer}>
              <FormikTextField
                variant="outlined"
                margin="normal"
                fullWidth
                label="Usuario"
                name="mail"
                autoFocus
                type="text"
            
              />
              <FormikTextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="contraseña"
                label="Contraseña"
                type={showPassword ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={togglePasswordVisibility} edge="end">
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <Button
              color="primary"
              variant="contained"
              className={classes.button}
              fullWidth
              type="submit"
              disabled={loading || loadingToken}
            >
              {loading || loadingToken ? (
                <CircularProgress size={24} thickness={4} color="secondary" />
              ) : (
                "Ingresar"
              )}
            </Button>
          </Form>
        </Formik>
      </Paper>
    </div>
  );
};

export default Login;
