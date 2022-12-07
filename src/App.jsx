import React from "react";
import { StyledAppContainer } from "./Styles";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./Pages/Home";
import { Register } from "./Pages/Register";
import { DashBoard } from "./Pages/Dashbord";
import { ToastContainer, Zoom } from "react-toastify";
import { AuthProvider } from "./Contexts/AuthConxtext";

function App() {
    return (
        <StyledAppContainer>
            <ToastContainer transition={Zoom} autoClose={2000} />
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/Register" element={<Register />} />
                    <Route path="/Dashboard" element={<DashBoard />} />
                    <Route path="*" element={<HomePage />} />
                </Routes>
            </AuthProvider>
        </StyledAppContainer>
    );
}

export default App;
