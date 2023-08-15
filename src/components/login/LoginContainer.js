import React from "react";
import Login from "./Login";
import { useDispatch } from "react-redux";
import { createUser, login } from "../../redux/actions/auth";
import CreateUser from "./createUser/CreateUser";
import { useState } from "react";
import { toast } from "react-toastify";

const LoginContainer = () => {
  const dispatch = useDispatch();
  const [loginOpen, setLoginOpen] = useState(true)
  const [createUserOpen, setCreateUserOpen] = useState(false)
  const handleLogin = (values) => {
    dispatch(login(values));
  };
  const hanldeCreateUser = (values) => {
    dispatch(createUser(values)).then((resp) => toast.success(resp.message))
  }

  const handleOpenSignUp = () => {
    setLoginOpen(false)
    setCreateUserOpen(true)
  }
  const handleCloseCreateUser = () =>{
    setCreateUserOpen(false)
    setLoginOpen(true)
  }
  return (
    <>  
      {createUserOpen && <CreateUser handleSubmit={hanldeCreateUser} handleCloseCreateUser={handleCloseCreateUser} />}
      {loginOpen && <Login handleSubmit={handleLogin} handleOpenSignUp={handleOpenSignUp}  />}
    </>
  );
};

export default LoginContainer;
