import React from "react";
import Login from "./Login";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/auth";

const LoginContainer = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(login(values));
  };
  return <Login handleSubmit={handleSubmit} />;
};

export default LoginContainer;
