import React, { useEffect, useState } from "react";
import Autocomplete, {
  createFilterOptions,
} from "@material-ui/lab/Autocomplete";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useFormikContext } from "formik";
import FormikTextField from "./FormikTextField";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  helperText: {
    color: "green",
  },
}));

const FormikAutocomplete = (props) => {
  const classes = useStyles();
  const { setFieldValue, values } = useFormikContext();

  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState(props.options);
  const loading = open && options.length === 0 && !!props.getOptions;

  const getValue = () => {
    const optionFound = options.find((o) => {
      if (props.returnProp) {
        return o[props.returnProp] === values[props.name];
      } else {
        return o.id === values[props.name];
      }
    });
    return optionFound ? optionFound : null;
  };

  const [value, setValue] = useState(getValue());

  useEffect(() => {
    setValue(getValue());
  }, [values[props.name]]);

  useEffect(() => {
    if (loading) {
      props.getOptions();
    }
  }, [loading]);

  useEffect(() => {
    setOptions(props.options);
  }, [props.options]);

  const onInputChange = (value, reason) => {
    if (reason === "reset" && value === "") {
      setFieldValue(props.name, null);
    }
  };

  const onChange = (value) => {
    setFieldValue(
      props.name,
      value ? (props.returnProp ? value[props.returnProp] : value.id) : value
    );
    if (props.callBack) {
      props.callBack(value);
    }
  };

  const valueIsNotInOptions = () => {
    return (
      props.helperText &&
      values[props.name] &&
      (props.optionId
        ? !options.some((o) => o[props.optionId] === values[props.name])
        : !options.some((o) => o.nombre === values[props.name]))
    );
  };

  const filterOptions = createFilterOptions({
    stringify: (option) => props.filterOptions(option),
  });

  return (
    <Autocomplete
      open={open}
      options={options}
      freeSolo={props.freeSolo}
      loading={loading}
      className={props.className}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      value={value}
      getOptionSelected={(option, value) => option.id === value.id}
      getOptionLabel={(option) => {
        const label = props.labelOption
          ? props.labelOption(option)
          : option.nombre;
        return props.formatLabelOption ? props.formatLabelOption(label) : label;
      }}
      filterOptions={props.filterOptions ? filterOptions : undefined}
      renderOption={(option) => (
        <React.Fragment>
          {props.renderOption ? props.renderOption(option) : option.nombre}
        </React.Fragment>
      )}
      onChange={(event, value) => onChange(value)}
      onInputChange={(event, value, reason) => onInputChange(value, reason)}
      disabled={props.disabled}
      renderInput={(params) => {
        return (
          <FormikTextField
            {...params}
            name={props.name}
            label={props.label}
            variant={props.variant}
            type={props.type}
            autoComplete={props.autoComplete}
            helperText={valueIsNotInOptions() ? props.helperText : null}
            FormHelperTextProps={{
              className: classes.helperText,
            }}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <React.Fragment>
                  {loading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              ),
            }}
          />
        );
      }}
    />
  );
};

export default FormikAutocomplete;
