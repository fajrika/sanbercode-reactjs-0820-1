import React, { useContext } from "react";
import { FormLoginContext } from "../../context/formLogin";
import { Redirect } from "react-router-dom";

const Login = () => {
    const [, , , , setStatus] = useContext(
        FormLoginContext
    );

    localStorage.removeItem("username");
    setStatus(0);

    return <Redirect to="/Login" />;
};

export default Login;
