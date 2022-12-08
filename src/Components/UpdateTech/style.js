import styled from "styled-components";

export const StyledDivUpdateTech = styled.div`
    position: fixed;
    top: 0;
    right: 0;

    display: grid;
    place-items: center;

    width: 100vw;
    height: 100vh;

    background: rgb(0, 0, 0, 0.7);

    @keyframes modalIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    animation: modalIn 0.2s ease-in;

    div {
        width: 28%;
        height: 32%;

        @media (max-width: 1000px) {
            width: 95%;
            height: 45%;
        }

        section {
            border-top-left-radius: 16px;
            border-top-right-radius: 16px;

            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 16px;

            background: #343b41;
        }

        form {
            border-bottom-left-radius: 16px;
            border-bottom-right-radius: 16px;

            background: #212529;
            height: 100%;

            padding: 16px;

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            gap: 24px;

            select {
                width: 100%;
                height: 50px;

                margin-bottom: 32px;

                padding: 0 12px;

                font-size: 16px;

                border: solid 2px white;
                border-radius: 16px;
                background: #343b41;

                color: white;
            }

            button {
                background: #ff577f;

                width: 100%;
                height: 50px;

                font-size: 16px;

                color: white;

                border-radius: 16px;
            }
        }
    }
`;
