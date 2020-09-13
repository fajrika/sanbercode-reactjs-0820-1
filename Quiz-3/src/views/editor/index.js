import React from "react";
import { MovieProvider } from "../../context/movieEditor";
import { FormEditorProvider } from "../../context/formEditor";
import Form from "./form";
import List from "./list";
import "./../../assets/css/list.css";

const Fruit = () => {
    return (
        <MovieProvider>
            <FormEditorProvider>
                <List />
                <Form />
            </FormEditorProvider>
        </MovieProvider>
    );
};

export default Fruit;
