import React from "react";
import { MovieProvider } from "../../context/movieEditor";
import Home from "./home";

const Fruit = () => {
    return (
        <MovieProvider>
            <Home />
        </MovieProvider>
    );
};

export default Fruit;
