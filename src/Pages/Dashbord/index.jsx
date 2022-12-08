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

import { UserContext } from "../../Contexts/UserConxtext";

import { TechsContext } from "../../Contexts/TechsContext";
import { Techs, AddTech } from "./techs.jsx";
import { UpdateTech } from "../../Components/UpdateTech";

export const DashBoard = () => {

    const navigate = useNavigate();
    const { user, setUser, stay } = useContext(UserContext);
    const { modal, setModal, updateModal } = useContext(TechsContext);

    function logout() {
        localStorage.removeItem("@kenziehub:token");
        setUser(null)
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
                    <button onClick={() => setModal(true)}>
                        <IoIosAdd size={35} />
                    </button>
                </span>
                <Techs />
            </StyledDiv2Dashbord>
            {modal ? <AddTech /> : null}
            {updateModal ? <UpdateTech /> : null}
        </StyledContainerDashboard>
    ) : (
        <Navigate to="/" />
    );
};
