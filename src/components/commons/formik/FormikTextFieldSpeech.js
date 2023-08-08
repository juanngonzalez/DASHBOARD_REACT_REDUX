import React from "react";
import { useField, useFormikContext } from "formik";
import TextFieldSpeech from "../speechToText/textFieldSpeech";

const FormikTextFieldSpeech = (props) => {
  const [field, meta] = useField(props);
  const { setFieldValue } = useFormikContext();

  const handleChange = (value, isAudio, idSelected) => {
    if (idSelected === props.id) {
      if (isAudio) {
        const aux = meta.value || "";
        setFieldValue(props.name, aux + value);
      } else {
        setFieldValue(props.name, value);
      }
    }
  };

  return (
    <TextFieldSpeech
      {...props}
      {...field}
      onChange={handleChange}
      error={meta.touched && meta.error ? true : false}
      helperText={meta.touched && meta.error ? meta.error : null}
    />
  );
};

export default FormikTextFieldSpeech;
