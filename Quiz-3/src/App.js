import React from "react";
import Routes from "./Routes";
import { FormLoginProvider } from "./context/formLogin";

function App() {
    return (
        <FormLoginProvider>
            <Routes />
        </FormLoginProvider>
    );
}

export default App;
