import logo from "../../imgs/Logo.svg";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { StyledContainerHome, StyledDivFormHome } from "./style";

import { Link } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";

import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthConxtext";

export const HomePage = () => {
    const { loading, onSubmit, formSchema } = useContext(AuthContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(formSchema),
    });

    

    return (
        <StyledContainerHome>
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
