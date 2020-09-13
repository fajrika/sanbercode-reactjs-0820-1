import React, { useState, createContext } from "react";
import Axios from "axios";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
    const [movie, setMovie] = useState([]);
    const loadMovie = (sort = "sort") => {
        Axios.get("http://backendexample.sanbercloud.com/api/movies").then(
            (res) => {
                let tmpData = res.data;
                if (sort === "sort") {
                    tmpData.sort((a, b) => {
                        return parseInt(a.rating) < parseInt(b.rating) ? 1 : -1;
                    });
                } else {
                    tmpData.sort((a, b) => {
                        return a.created_at > b.created_at ? 1 : -1;
                    });
                }
                setMovie(tmpData);
            }
        );
    };
    return (
        <MovieContext.Provider value={[movie, setMovie, loadMovie]}>
            {props.children}
        </MovieContext.Provider>
    );
};
