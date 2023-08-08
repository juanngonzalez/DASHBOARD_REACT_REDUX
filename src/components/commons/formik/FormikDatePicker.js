import React from "react";
import { useField, useFormikContext } from "formik";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import deLocale from "date-fns/locale/es";

const FormikDatePicker = (props) => {
  const [field, meta] = useField(props);
  const { setFieldValue } = useFormikContext();

  const handleChange = (value) => {
    setFieldValue(props.name, value);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={deLocale}>
      <KeyboardDatePicker
        ampm={false}
        format="dd/MM/yyyy"
        autoOk={true}
        variant="inline"
        {...props}
        {...field}
        error={meta.touched && meta.error ? true : false}
        helperText={meta.touched && meta.error ? meta.error : null}
        onChange={handleChange}
      />
    </MuiPickersUtilsProvider>
  );
};

export default FormikDatePicker;
