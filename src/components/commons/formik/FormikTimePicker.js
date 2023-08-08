import React from "react";
import { useField, useFormikContext } from "formik";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
} from "@material-ui/pickers";
import { AccessTime } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  picker: {
    marginTop: 8,
    marginBottom: 8,
  },
}));

const FormikTimePicker = (props) => {
  const [field, meta] = useField(props);
  const classes = useStyles();
  const { setFieldValue } = useFormikContext();

  const handleChange = (value) => {
    setFieldValue(props.name, value);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardTimePicker
        variant="inline"
        autoOk={true}
        ampm={false}
        keyboardIcon={<AccessTime />}
        {...props}
        {...field}
        error={meta.touched && meta.error ? true : false}
        helperText={meta.touched && meta.error ? meta.error : null}
        onChange={handleChange}
        className={
          props.className
            ? `${classes.picker} ${props.className}`
            : classes.picker
        }
      />
    </MuiPickersUtilsProvider>
  );
};

export default FormikTimePicker;
