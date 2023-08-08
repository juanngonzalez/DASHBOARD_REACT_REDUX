import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginContainer from "../components/login/LoginContainer";


const PublicRoutes = () => {
  return (
    <Routes>
      <Route key="login" exact path="/" element={<LoginContainer />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default PublicRoutes;