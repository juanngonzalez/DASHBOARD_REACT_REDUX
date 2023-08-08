import { Button, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: 5,
  },
  cancel: {
    marginRight: 10,
  },
}));

const FormikActions = ({ handleCancel, cancel, submit }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {handleCancel && (
        <Button
          onClick={handleCancel}
          color="primary"
          type="button"
          className={classes.cancel}
        >
          {cancel ? cancel : "Cancelar"}
        </Button>
      )}
      <Button type="submit" color="primary" variant="contained">
        {submit ? submit : "Enviar"}
      </Button>
    </div>
  );
};

export default FormikActions;
