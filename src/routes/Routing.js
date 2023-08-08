import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import AuthRoutes from "./AuthRoutes";
import PublicRoutes from "./PublicRoutes";
import axios from "axios";



const Routing = () => {
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);

  const [activeToken, setActiveToken] = useState(true);

  const isAuthenticated = auth.authenticated && activeToken;

  axios.defaults.baseURL = "http://localhost:8080/";


    return isAuthenticated ? <AuthRoutes data={auth.data} /> : <PublicRoutes />
};

export default Routing;