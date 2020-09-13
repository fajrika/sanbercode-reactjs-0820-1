import React, { useContext, useEffect, useState } from "react";
import { FormLoginContext } from "../../context/formLogin";

function Login() {
    const [input, setInput, checkLogin, status, setStatus] = useContext(
        FormLoginContext
    );

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (checkLogin(input.username, input.password)) {
            localStorage.setItem("username", "fajrika");
            setStatus(1);
        } else {
            setStatus(0);
        }
        setInput({
            username: "",
            password: "",
        });
    };

    if (status) {
        return <section>Anda Telah Login</section>;
    } else {
        return (
            <section>
                <form onSubmit={handleSubmit}>
                    <div className="form-add">
                        <h1> Add Fruit Form </h1>
                        <div className="input-group">
                            <label>
                                <b>Username : </b>
                            </label>
                            <input
                                type="text"
                                value={input.username}
                                onChange={handleChange}
                                name="username"
                            />
                        </div>
                        <div className="input-group">
                            <label>
                                <b>Password : </b>
                            </label>
                            <input
                                type="password"
                                value={input.password}
                                onChange={handleChange}
                                name="password"
                            />
                        </div>
                        <div className="submit-add">
                            <button type="submit"> Submit </button>
                        </div>
                    </div>
                </form>
            </section>
        );
    }
}
export default Login;
