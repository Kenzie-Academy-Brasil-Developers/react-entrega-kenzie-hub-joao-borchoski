import React from "react";
import {
    StyledContainerDashboard,
    StyledDiv1Dashbord,
    StyledDiv2Dashbord,
    StyledHeaderDashboard,
} from "./style";
import logo from "../../imgs/Logo.svg";

import { IoIosAdd } from "react-icons/io";

import { useNavigate } from "react-router-dom";

export const DashBoard = () => {
    const navigate = useNavigate();

    function logout() {
        localStorage.removeItem("user");
        localStorage.removeItem("tokenUserKenzieHub");
        navigate("/");
    }

    function getLocalUser() {
        const user = JSON.parse(localStorage.getItem("user")) || "";

        return user;
    }
    getLocalUser();

    const RenderName = () => {
        return getLocalUser().name;
    };
    const RenderModule = () => {
        return getLocalUser().course_module;
    };

    return (
        <StyledContainerDashboard>
            <StyledHeaderDashboard>
                <img src={logo} alt="" />
                <button onClick={logout}>Sair</button>
            </StyledHeaderDashboard>
            <StyledDiv1Dashbord>
                <h2>
                    Ola, <RenderName />
                </h2>
                <p>
                    <RenderModule />
                </p>
            </StyledDiv1Dashbord>
            <StyledDiv2Dashbord>
                <span>
                    <p>Tecnologias</p>
                    <button>
                        <IoIosAdd size={35} />
                    </button>
                </span>
                <div>
                    <h2>Ainda estamos trabalhando nisso...</h2>
                </div>
            </StyledDiv2Dashbord>
        </StyledContainerDashboard>
    );
};
