import React, { useEffect } from "react";
import { getIn, useField, useFormikContext } from "formik";
import { FormHelperText } from "@material-ui/core";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

const FormikRadio = (props) => {
  const [field, meta] = useField(props);
  const { values } = useFormikContext();
  const fieldValue = getIn(values, props.name);

  useEffect(() => {
    if (props.callBack) {
      props.callBack(fieldValue);
    }
  }, [fieldValue]);

  return (
    <FormControl
      component="fieldset"
      error={meta.touched && meta.error ? true : false}
      disabled={props.disabled}
    >
      <FormLabel component="legend">{props.label}</FormLabel>
      <RadioGroup
        name={props.name}
        value={props.value}
        row={props.row}
        {...field}
      >
        {props.children}
      </RadioGroup>
      <FormHelperText>
        {meta.touched && meta.error ? meta.error : null}
      </FormHelperText>
    </FormControl>
  );
};

export default FormikRadio;
