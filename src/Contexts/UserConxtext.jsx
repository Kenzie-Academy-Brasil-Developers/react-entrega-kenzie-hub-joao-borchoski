import { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Api } from "../Components/Services/Api";
import * as yup from "yup";
import { useEffect } from "react";
import { useContext } from "react";
import { TechsContext } from "./TechsContext";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [stay, setStay] = useState(true);

    const { observer, setObserver } = useContext(TechsContext);

    const navigate = useNavigate();

    useEffect(() => {
        async function loadUser() {
            const token = localStorage.getItem("@kenziehub:token");

            if (!token) {
                setStay(false);
                return;
            }

            try {
                const { data } = await Api.get("/profile", {
                    headers: {
                        authorization: `Bearer ${token}`,
                    },
                });

                setUser(data);
            } catch (error) {
                console.log(error);
            } finally {
                setStay(false);
            }
        }

        loadUser();
    }, [observer]);

    const onSubmit = async (data) => {
        try {
            setLoading(true);

            const response = await Api.post("/sessions", data);

            const { token, user: userResponse } = response.data;

            setUser(userResponse);
            localStorage.setItem("@kenziehub:token", token);

            setTimeout(() => navigate("/Dashboard"), 3000);

            toast.success("Usuário logado!");
        } catch (error) {
            toast.error("Ops, algo deu errado");
        } finally {
            setLoading(false);
        }
    };

    const formSchema = yup.object().shape({
        email: yup
            .string()
            .required("E-mail obrigatório")
            .email("E-mail inválido"),
        password: yup
            .string()
            .required("Senha obrigatória")
            .min(6, "Minimo de 6 caracteres"),
    });

    return (
        <UserContext.Provider
            value={{
                loading,
                setLoading,
                onSubmit,
                formSchema,
                user,
                setUser,
                stay,
                observer,
                setObserver,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
