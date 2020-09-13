import React, { useState, createContext } from "react";

export const FormLoginContext = createContext();

export const FormLoginProvider = (props) => {
    const [input, setInput] = useState({
        username: "",
        password: "",
    });
    const [status, setStatus] = useState();
    const checkLogin = (username, password) => {
        if (username === "fajrika" && password === "admin") return 1;
        return 0;
    };

    return (
        <FormLoginContext.Provider
            value={[input, setInput, checkLogin, status, setStatus]}
        >
            {props.children}
        </FormLoginContext.Provider>
    );
};
