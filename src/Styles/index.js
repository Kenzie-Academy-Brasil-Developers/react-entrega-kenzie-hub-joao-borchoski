import styled from "styled-components";

export const StyledAppContainer = styled.div`
    background: #121214;
    height: 100vh;
    color: white;
    padding: 0 20%;
    margin: 0 auto;

    display: flex;

    @media (max-width: 1000px) {
        height: 100%;
        padding: 3%;
    }
`;
