import styled from "styled-components";

export const StyledContainerHome = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 64px;

    height:100vh;
    width: 100%;

    @media (max-width:1000px){
        gap: 32px;
    }
`;

export const StyledDivFormHome = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 16px 32px;
    border-radius: 16px;

    background: #212529;

    gap: 32px;

    width: 60%;
    height: 60%;

    @media (max-width: 1000px) {
        width: 100%;
        padding: 8px;
        height: 80%;
    }

    div {
        width: 100%;
        position: relative;

        p {
            font-size: 14px;

            position: absolute;
            bottom: -20px;
        }
    }

    span {
        display: flex;
        justify-content: center;
    }

    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 80%;

        gap: 32px;

        @media (max-width: 1000px) {
            width: 100%;
        }

        input {
            width: 100%;
            height: 50px;
            border-radius: 16px;
            padding: 0 16px;
            border: none;
            font-size: 16px;
        }

        button {
            background: #ff577f;
            width: 100%;
            height: 50px;
            border-radius: 16px;
            color: white;
            font-size: 16px;
        }

        p {
            opacity: 0.5;
        }

        a {
            background: #868e96;
            width: 100%;
            height: 50px;
            border-radius: 16px;
            color: white;
            font-size: 16px;

            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
`;
