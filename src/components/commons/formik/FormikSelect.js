import React, { useEffect } from "react";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import { getIn, useField, useFormikContext } from "formik";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 120,
    marginBottom: -3,
  },
}));

const FormikSelect = (props) => {
  const classes = useStyles();
  const [field, meta] = useField(props);
  const { values } = useFormikContext();
  const fieldValue = getIn(values, props.name);

  useEffect(() => {
    if (props.callback) {
      props.callback(fieldValue);
    }
  }, [fieldValue]);

  return (
    <FormControl
      error={meta.touched && meta.error ? true : false}
      className={
        props.className
          ? `${classes.formControl} ${props.className}`
          : classes.formControl
      }
      disabled={props.disabled ? true : false}
      variant={props.variant ? props.variant : "standard"}
      {...props}
    >
      <InputLabel>{props.label}</InputLabel>
      <Select
        name={props.name}
        value={props.value}
        variant={props.variant}
        label={props.label}
        {...field}
      >
        {props.children}
      </Select>
      <FormHelperText>
        {meta.touched && meta.error ? meta.error : null}
      </FormHelperText>
    </FormControl>
  );
};

export default FormikSelect;
