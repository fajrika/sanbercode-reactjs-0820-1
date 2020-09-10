import React, { useState, createContext } from "react";
import axios from "axios";

export const FruitContext = createContext();
export const FruitProvider = props => {
    const [fruit, setFruit] = useState([
        { name: "Anggur", price: 120, weight: 10 },
        { name: "Sirsak", price: 125, weight: 10 },
        { name: "Pisang", price: 130, weight: 10 },
        { name: "Apel", price: 124, weight: 10 }
    ]);
    const loadFruit = () => axios.get("http://backendexample.sanbercloud.com/api/fruits").then(res => setFruit(res.data))

    return (
        <FruitContext.Provider value={[fruit, loadFruit]}>
            {props.children}
        </FruitContext.Provider>
    );
};

export const InputContext = createContext();
export const InputProvider = props => {
    const [input, setInput] = useState(
        { name: '', price: '', weight: '' }
    );
    return (
        <InputContext.Provider value={[input, setInput]}>
            {props.children}
        </InputContext.Provider>
    );
}

export const IndexContext = createContext(-1);
export const IndexProvider = props => {
    const [index, setIndex] = useState(-1);
    return (
        <IndexContext.Provider value={[index, setIndex]}>
            {props.children}
        </IndexContext.Provider>
    );
}