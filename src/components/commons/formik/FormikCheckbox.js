import { Checkbox, FormControlLabel, makeStyles } from "@material-ui/core";
import React from "react";
import { useField } from "formik";

const useStyles = makeStyles((theme) => ({
  checkbox: {
    marginLeft: -10,
  },
}));

const FormikCheckbox = (props) => {
  const [field] = useField(props);
  const classes = useStyles();

  return (
    <FormControlLabel
      control={
        <Checkbox
          name={props.name}
          {...field}
          checked={field.value}
          {...props}
        />
      }
      className={
        props.className
          ? `${classes.checkbox} ${props.className}`
          : classes.checkbox
      }
      {...props}
    />
  );
};

export default FormikCheckbox;
