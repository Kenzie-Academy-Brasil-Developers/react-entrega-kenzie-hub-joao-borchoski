import React, { useState } from "react";
import logo from "../../imgs/Logo.svg";
import { StyledContainerRegister, StyledDivFormRegister } from "./style";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useNavigate } from "react-router-dom";

import { Api } from "../../Components/Services/Api";

import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Register = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const formSchema = yup.object().shape({
        name: yup.string().required("Nome obrigatório"),

        email: yup
            .string()
            .required("E-mail obrigatório")
            .email("E-mail inválido"),

        password: yup
            .string()
            .required("Senha obrigatória")
            .min(6, "Minimo de 6 caracteres"),

        confirmPassword: yup
            .string()
            .required("Confirmar sua senha é obrigatório")
            .oneOf([yup.ref("password")], "Senhas diferentes"),

        bio: yup.string().required("Bio obrigatória").min(15),

        contact: yup.string().required("Contato obrigatório").min(10),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onBlur",
        resolver: yupResolver(formSchema),
    });

    const onSubmit = async (data) => {
        try {
            setLoading(true);

            const response = await Api.post("users", {
                email: data.email,
                password: data.password,
                name: data.name,
                bio: data.bio,
                contact: data.contact,
                course_module: data.course_module,
            });

            toast.success("Usuário criado com sucesso!");

            setTimeout(() => navigate("/"), 3000);
            

            toast.success("Conta criada com sucesso!");
        } catch (error) {
            toast.error(`Ops, ${error.response.data.message}`);
            console.log(error)
        } finally {
            setLoading(false);
        }
    };

    return (
        <StyledContainerRegister>
            <ToastContainer transition={Zoom} autoClose={2000} />
            <section>
                <img src={logo} alt="logo" />
                <Link to={"/"}>Voltar</Link>
            </section>
            <StyledDivFormRegister>
                <section>
                    <h1>Crie sua conta</h1>
                    <span>Rapido e grátis, vamos nessa</span>
                </section>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <input
                            type="text"
                            placeholder="Digite aqui seu nome"
                            {...register("name")}
                        />
                        <p>{errors.name?.message} </p>
                    </div>
                    <div>
                        <input
                            type="email"
                            placeholder="Digite aqui seu email"
                            {...register("email")}
                        />
                        <p>{errors.email?.message}</p>
                    </div>

                    <div>
                        <input
                            type="password"
                            placeholder="Digite aqui sua senha"
                            {...register("password")}
                        />
                        <p>{errors.password?.message}</p>
                    </div>
                    <div>
                        <input
                            type="password"
                            placeholder="Digite aqui sua senha novamente"
                            {...register("confirmPassword")}
                        />
                        <p>{errors.confirmPassword?.message}</p>
                    </div>

                    <div>
                        <input
                            type="text"
                            placeholder="Bio: Fale aqui sobre você"
                            {...register("bio")}
                        />
                        <p>{errors.bio?.message}</p>
                    </div>

                    <div>
                        <input
                            type="text"
                            placeholder="Deixe aqui seu Linkedin"
                            {...register("contact")}
                        />
                        <p>{errors.contact?.message}</p>
                    </div>

                    <select {...register("course_module")}>
                        <option value="Primeiro modulo">
                            Primeiro modulo (Introdução ao FrontEnd)
                        </option>
                        <option value="Segundo modulo">
                            Segundo modulo (Aprofundamento ao FrontEnd)
                        </option>
                        <option value="Terceiro modulo">
                            Terceiro modulo (Finalização do FrontEnd)
                        </option>
                        <option value="Quarto modulo">
                            Quarto modulo (Introdução ao BackEnd)
                        </option>
                        <option value="Quinto modulo">
                            Quinto modulo (Aprofundamento ao BackEnd)
                        </option>
                        <option value="Sexto modulo">
                            Sexto modulo (Finalização do BackEnd)
                        </option>
                    </select>
                    <button type="submit" disabled={loading}>
                        Cadastrar
                    </button>
                </form>
            </StyledDivFormRegister>
        </StyledContainerRegister>
    );
};
