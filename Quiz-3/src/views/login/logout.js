import React, { useContext } from "react";
import Form from "./login";
import { FormLoginContext } from "../../context/formLogin";
import { Redirect } from "react-router-dom";

const Login = () => {
    const [input, setInput, checkLogin, status, setStatus] = useContext(
        FormLoginContext
    );

    localStorage.removeItem("username");
    setStatus(0);

    return <Redirect to="/Login" />;
};

export default Login;
