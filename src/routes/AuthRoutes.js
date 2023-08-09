import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import DashBoardContainer from "../components/dashboard/DashBoardContainer";

const AuthRoutes = ({ data }) => {
  return (
    <Routes >
      <Route path="/" element={<DashBoardContainer/>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AuthRoutes;