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

  axios.defaults.baseURL = "dashboardnodeapi-production-2284.up.railway.app/";


  return isAuthenticated ? <div className="authContent"><AuthRoutes data={auth.data} /></div> : <PublicRoutes />
};

export default Routing;