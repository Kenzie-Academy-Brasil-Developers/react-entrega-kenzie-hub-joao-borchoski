import styled from "styled-components";

export const StyledContainerRegister = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;

    gap: 32px;

    section {
        display: flex;
        justify-content: space-between;
        width: 60%;

        @media (max-width: 1000px) {
            width: 100%;
        }

        a {
            background: #212529;

            width: 15%;
            height: 50px;
            border-radius: 16px;
            color: white;
            font-size: 16px;

            display: flex;
            justify-content: center;
            align-items: center;

            @media (max-width: 1000px) {
                width: 25%;
            }
        }
    }
`;

export const StyledDivFormRegister = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 48px 32px;
    border-radius: 16px;

    background: #212529;

    gap: 32px;

    width: 60%;
    max-height: 80%;

    @media (max-width: 1000px) {
        width: 100%;
        padding: 8px;
        max-height: 100%;
    }

    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        gap: 16px;

        span {
            opacity: 0.7;
        }
    }

    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 80%;

        gap: 24px;

        @media (max-width: 1000px) {
            width: 100%;
        }
        input {
            width: 100%;
            height: 50px;
            border-radius: 16px;
            padding: 0 16px;
            border: none;
            font-size: 14px;
        }
        select {
            width: 100%;
            height: 50px;
            border-radius: 16px;
            padding: 0 16px;
            border: none;
            font-size: 14px;

            background: url("../../imgs/select.svg") no-repeat center right #fff;
            border-radius: 16px;
            font-size: 15px;
            padding-right: 20px;
        }
        button {
            background: #ff577f;
            width: 100%;
            height: 50px;
            border-radius: 16px;
            color: white;
            font-size: 16px;
        }
        div {
            display: flex;
            flex-direction: column;
            width: 100%;

            position: relative;

            p {
                position: absolute;
                bottom: -18px;

                opacity: 0.5;

                font-size: 80%;
            }
        }
    }
`;
