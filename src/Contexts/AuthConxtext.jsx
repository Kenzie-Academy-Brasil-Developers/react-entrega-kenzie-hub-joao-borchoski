import { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Api } from "../Components/Services/Api";
import * as yup from "yup";
import { useEffect } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [stay, setStay] = useState(true);
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const [modal, setModal] = useState(false);

    const [observer, setObserver] = useState(0);

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
        <AuthContext.Provider
            value={{
                loading,
                setLoading,
                onSubmit,
                formSchema,
                user,
                stay,
                modal,
                setModal,
                observer,
                setObserver,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
