import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const AuthRoutes = ({ data }) => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AuthRoutes;