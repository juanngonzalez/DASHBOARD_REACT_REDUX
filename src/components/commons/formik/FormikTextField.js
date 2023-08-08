import React from "react";
import { TextField, ThemeProvider, useTheme } from "@mui/material";
import { useField } from "formik";

const FormikStyledTextField = (props) => {
  const [field, meta] = useField(props);
  const theme = useTheme();
  const handleBlur = (e) => {
    field.onBlur(e);
    if (props.onBlur) {
      props.onBlur(e);
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <TextField
        color={theme.palette.mode =="dark" ? "secondary" : "primary"}
        error={meta.touched && meta.error ? true : false}
        helperText={
          meta.touched && meta.error
            ? meta.error
            : props.helperText
            ? props.helperText
            : null
        }
        {...props}
        {...field}
        onBlur={handleBlur}
        inputProps={{
          autoComplete: "new-password",
          form: {
            autoComplete: "off",
          },
        }}
      />
    </ThemeProvider>
  );
};

export default FormikStyledTextField;
