import React from "react";
import {
    StyledContainerDashboard,
    StyledDiv1Dashbord,
    StyledDiv2Dashbord,
    StyledHeaderDashboard,
} from "./style";
import logo from "../../imgs/Logo.svg";

import { IoIosAdd } from "react-icons/io";

import { Navigate, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthConxtext";
import { Techs, AddTech } from "./techs.jsx";


export const DashBoard = () => {
    const navigate = useNavigate();
    const { user, stay, modal, setModal } = useContext(AuthContext);

    function logout() {
        localStorage.removeItem("@kenziehub:token");
        navigate("/");
    }

    if (stay) {
        return null;
    }

    return user ? (
        <StyledContainerDashboard>
            <StyledHeaderDashboard>
                <img src={logo} alt="" />
                <button onClick={logout}>Sair</button>
            </StyledHeaderDashboard>
            <StyledDiv1Dashbord>
                <h2>Ola, {user.name}</h2>
                <p>{user.course_module}</p>
            </StyledDiv1Dashbord>
            <StyledDiv2Dashbord>
                <span>
                    <p>Tecnologias</p>
                    <button onClick={()=> setModal(true)}>
                        <IoIosAdd size={35} />
                    </button>
                </span>
                <Techs />
            </StyledDiv2Dashbord>
            {modal ? <AddTech/> : null}
        </StyledContainerDashboard>
    ) : (
        <Navigate to="/" />
    );
};
