import React from "react";
import { StyledAppContainer } from "./Styles";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./Pages/Home";
import { Register } from "./Pages/Register";
import { DashBoard } from "./Pages/Dashbord";

function App() {
    return (
        <StyledAppContainer>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/Dashboard" element={<DashBoard />}/>
                <Route path="*" element={<HomePage />} />
            </Routes>
        </StyledAppContainer>
    );
}

export default App;
