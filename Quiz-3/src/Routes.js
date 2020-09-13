import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

// import Movie from "./Listeditor";
import Home from "./views/home";
import About from "./views/about";
import Editor from "./views/editor";
import Login from "./views/login";
import Logout from "./views/login/logout";

import "./assets/css/style.css";
import logo from "./assets/img/logo.png";
import { render } from "@testing-library/react";

import { FormLoginContext } from "./context/formLogin";
const Routes = () => {
    const [input, setInput, checkLogin, status, setStatus] = useContext(
        FormLoginContext
    );
    return (
        <Router>
            <div>
                <header>
                    <img src={logo} id="logo" width="200px" />
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                {status ? (
                                    <Link to="/editor">Movie List Editor</Link>
                                ) : (
                                    ""
                                )}
                            </li>
                            <li>
                                {status ? (
                                    <Link to="/logout">Logout</Link>
                                ) : (
                                    <Link to="/login">Login</Link>
                                )}
                            </li>
                        </ul>
                    </nav>
                </header>

                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/editor">
                        <Editor />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/logout">
                        <Logout />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default Routes;
