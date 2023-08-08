import React from "react";
import { CircularProgress } from "@material-ui/core";

const CircularLoading = ({ style }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <CircularProgress style={style} />
    </div>
  );
};

export default CircularLoading;
