import React, { useState } from "react";
import logo from "../../imgs/Logo.svg";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { StyledContainerHome, StyledDivFormHome } from "./style";

import { Link } from "react-router-dom";

import { Api } from "../../Components/Services/Api";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useNavigate } from "react-router-dom";

export const HomePage = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const formSchema = yup.object().shape({
        email: yup
            .string()
            .required("E-mail obrigatório")
            .email("E-mail inválido"),
        password: yup.string().required("Senha obrigatória"),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(formSchema),
    });

    const onSubmit = async (data) => {
        try {

            setLoading(true);

            const response = await Api.post("/sessions", {
                email: data.email,
                password: data.password,
            });

            localStorage.setItem('user', JSON.stringify(response.data.user))
            localStorage.setItem('tokenUserKenzieHub', JSON.stringify(response.data.token))

            setTimeout(() => navigate("/Dashboard"), 3000);

            toast.success("Usuário logado!");

        } catch (error) {
            
            toast.error("Ops, algo deu errado");
                    
        } finally {

            setLoading(false);
            
        }
    };

    return (
        <StyledContainerHome>
            <ToastContainer autoClose={2000} />
            <img src={logo} alt="" />
            <StyledDivFormHome>
                <span>
                    <h1>Login</h1>
                </span>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <input
                            id="email"
                            type="email"
                            placeholder="Insira seu email"
                            {...register("email")}
                            disabled={loading}
                        />
                        <p>{errors.email?.message}</p>
                    </div>

                    <div>
                        <input
                            id="password"
                            type="password"
                            placeholder="Insira sua senha"
                            {...register("password")}
                            disabled={loading}
                        />
                        <p>{errors.password?.message}</p>
                    </div>
                    <button type="submit" disabled={loading}>
                        {loading ? "Carregando..." : "Entrar"}
                    </button>
                    <p>Ainda não possui uma conta?</p>
                    <Link to={"/Register"}>Cadastre-se</Link>
                </form>
            </StyledDivFormHome>
        </StyledContainerHome>
    );
};
