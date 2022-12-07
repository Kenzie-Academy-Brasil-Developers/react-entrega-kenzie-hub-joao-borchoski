import styled from "styled-components";

export const StlyledTechDiv = styled.div`
    background: #212529;

    width: 100%;
    height: 100%;

    border-radius: 16px;

    @media (max-width: 1000px) {
        height: 300px;

        font-size: 14px;
    }

    h1 {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 16px;

        padding: 20px;

        max-height: 550px;

        overflow: auto;

        @media (max-width: 1000px) {
            height: 300px;
        }

        ::-webkit-scrollbar {
            width: 4px;
        }

        ::-webkit-scrollbar-track {
            background: transparent;
        }

        ::-webkit-scrollbar-thumb {
            background-color: #ff577f;
            border-radius: 20px;
            height: 10px;
        }

        li {
            display: flex;
            justify-content: space-between;
            align-items: center;

            background: #121214;

            padding: 14px;

            border-radius: 16px;

            section {
                display: flex;
                align-items: center;
                gap: 16px;

                p {
                    opacity: 0.5;
                }
                button {
                    color: white;
                }
            }
        }
    }
`;

export const StyledModalDiv = styled.div`
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

            input {
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

                height: 50px;

                font-size: 16px;

                color: white;

                border-radius: 16px;
            }

            label {
                margin-bottom: 2px;
            }
        }
    }
`;
