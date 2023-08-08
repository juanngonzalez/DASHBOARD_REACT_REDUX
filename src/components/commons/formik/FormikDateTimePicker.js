import React from "react";
import { useField, useFormikContext } from "formik";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDateTimePicker,
} from "@material-ui/pickers";
import deLocale from "date-fns/locale/es";
import { AccessTime, CalendarToday } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  icon: {
    color: "white",
  },
}));

const FormikDateTimePicker = (props) => {
  const classes = useStyles();
  const [field, meta] = useField(props);
  const { setFieldValue } = useFormikContext();

  const handleChange = (value) => {
    setFieldValue(props.name, value);
    if (props.callBack) {
      props.callBack(value);
    }
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={deLocale}>
      <KeyboardDateTimePicker
        ampm={false}
        format="dd/MM/yyyy HH:mm"
        autoOk={true}
        variant="inline"
        timeIcon={<AccessTime className={classes.icon} />}
        dateRangeIcon={<CalendarToday className={classes.icon} />}
        {...props}
        {...field}
        error={meta.touched && meta.error ? true : false}
        helperText={meta.touched && meta.error ? meta.error : null}
        onChange={handleChange}
      />
    </MuiPickersUtilsProvider>
  );
};

export default FormikDateTimePicker;
