import React from "react";
import { StyledDivUpdateTech } from "./style";
import { AiOutlineClose } from "react-icons/ai";
import { useContext } from "react";
import { TechsContext } from "../../Contexts/TechsContext";
import { useForm } from "react-hook-form";
import { Api } from "../Services/Api";
import { toast } from "react-toastify";

export const UpdateTech = () => {
    const { setUpdateModal, observer, setObserver } = useContext(TechsContext);

    const { register, handleSubmit } = useForm();

    const user = JSON.parse(localStorage.getItem("user"));

    async function onSubmit(data) {
        const token = localStorage.getItem("@kenziehub:token");

        const headers = {
            authorization: `Bearer ${token}`,
        };

        try {
            console.log(data)
            
            const response = await Api.put(`users/techs/${user.id}`, data, {
                headers: headers,
            });

            // console.log(response);

            toast.success("Tecnologia editada");

            setObserver(observer + 1);

            setUpdateModal(false)
        } catch (error) {
            toast.error("Ops... algo deu errado");
            
            console.log(error);
        }
    }

    return (
        <StyledDivUpdateTech>
            <div>
                <section>
                    <h2>Editar tecnologia</h2>
                    <button onClick={() => setUpdateModal(false)}>
                        <AiOutlineClose size={30} />
                    </button>
                </section>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1>{user.title}</h1>
                    <select id="status" {...register("status")}>
                        <option value="Iniciante">Iniciante</option>
                        <option value="Intermediário">Intermediário</option>
                        <option value="Avançado">Avançado</option>
                    </select>
                    <button type="submit">Atualizar</button>
                </form>
            </div>
        </StyledDivUpdateTech>
    );
};
