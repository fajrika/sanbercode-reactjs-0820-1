import React, { useState, createContext } from "react";

export const FormEditorContext = createContext();

export const FormEditorProvider = (props) => {
    const [input, setInput] = useState({
        title: "",
        description: "",
        year: "",
        duration: "",
        genre: "",
        rating: "",
    });
    const [index, setIndex] = useState(-1);

    return (
        <FormEditorContext.Provider value={[input, setInput, index, setIndex]}>
            {props.children}
        </FormEditorContext.Provider>
    );
};
