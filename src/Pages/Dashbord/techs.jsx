import React from "react";

import { StlyledTechDiv, StyledModalDiv } from "./techs";

import { CgTrashEmpty } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
import { MdEdit } from "react-icons/md";

import { useContext } from "react";

import { UserContext } from "../../Contexts/UserConxtext";

import { useForm } from "react-hook-form";
import { useEffect } from "react";

import { Api } from "../../Components/Services/Api";

import { useState } from "react";

import { toast } from "react-toastify";
import { TechsContext } from "../../Contexts/TechsContext";
import { UpdateTech } from "../../Components/UpdateTech";
import { json } from "react-router-dom";

export const Techs = () => {
    const { user } = useContext(UserContext);
    const {
        observer,
        setObserver,
        width,
        setUpdateModal,
    } = useContext(TechsContext);
    const [techList, setTechList] = useState([]);

    const token = localStorage.getItem("@kenziehub:token");

    useEffect(() => {
        function setListTechs() {
            try {
                setTechList(user.techs);
            } catch (error) {
                console.log(error);
            }
        }

        setListTechs();
    }, [user.techs]);

    async function deleteTech(id) {
        try {
            const response = await Api.delete(`users/techs/${id}`, {
                headers: { authorization: `Bearer ${token}` },
            });

            toast.success("Tecnologia deletada");

            setObserver(observer + 1);
        } catch (error) {
            toast.error("Ops... algo deu errado");
            console.log(error);
        }
    }

    function renderTechs(element, index) {
        if (element === undefined) {
            return;
        } else {
            return (
                <li key={index} id={element.id}>
                    <h3>{element.title}</h3>
                    <section>
                        <p>{element.status}</p>
                        <button
                            onClick={() => {
                                setUpdateModal(true);
                                localStorage.setItem('user', JSON.stringify(element))
                            }}
                        >
                            <MdEdit size={width > 1000 ? 30 : 22} />
                        </button>
                        <button onClick={() => deleteTech(element.id)}>
                            <CgTrashEmpty size={width > 1000 ? 30 : 22} />
                        </button>
                    </section>
                </li>
            );
        }
    }

    renderTechs();

    return (
        <StlyledTechDiv>
            {user.techs.length === 0 ? (
                <h1>Nenhuma tecnologia cadastrada ainda.</h1>
            ) : (
                <ul>
                    {techList.map((element, index) => {
                        return renderTechs(element, index);
                    })}
                </ul>
            )}
        </StlyledTechDiv>
    );
};

export function AddTech() {
    const { register, handleSubmit } = useForm();
    const { setModal, observer, setObserver } = useContext(TechsContext);

    const newTech = async (data) => {
        const token = localStorage.getItem("@kenziehub:token");

        console.log(data)

        const headers = {
            authorization: `Bearer ${token}`,
        };

        try {
            const response = await Api.post("users/techs", data, {
                headers: headers,
            });

            setObserver(observer + 1);

            setModal(false);

            toast.success("Tecnologia adicionada");
        } catch (error) {
            toast.error("Ops... algo deu errado");
            console.log(error);
        }
    };

    return (
        <StyledModalDiv>
            <div>
                <section>
                    <h2>Cadastrar Tecnologia</h2>
                    <button onClick={() => setModal(false)}>
                        <AiOutlineClose size={30} />
                    </button>
                </section>
                <form onSubmit={handleSubmit(newTech)}>
                    <label htmlFor="title">Nome</label>
                    <input
                        type="text"
                        {...register("title")}
                        id="title"
                        placeholder="Nome da tecnologia"
                    />
                    <label htmlFor="status">Selecionar status</label>
                    <select id="status" {...register("status")}>
                        <option value="Iniciante">Iniciante</option>
                        <option value="Intermediário">Intermediário</option>
                        <option value="Avançado">Avançado</option>
                    </select>
                    <button type="submit">Cadastrar Tecnologia</button>
                </form>
            </div>
        </StyledModalDiv>
    );
}
