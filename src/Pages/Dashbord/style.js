import styled from "styled-components";

export const StyledContainerDashboard = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    gap: 32px;
`;

export const StyledHeaderDashboard = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 16px 0;

    border-bottom: 2px solid #212529;

    button {
        background: #212529;

        width: 10%;
        height: 50px;
        border-radius: 16px;
        color: white;
        font-size: 16px;

        display: flex;
        justify-content: center;
        align-items: center;

        @media (max-width: 1000px) {
            height: 40px;
            width: 25%;
        }
    }
`;

export const StyledDiv1Dashbord = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    

    padding: 16px 0;
    padding-bottom: 48px;

    border-bottom: 2px solid #212529;

    @media (max-width: 1000px) {
        align-items: flex-start;
        flex-direction: column;
        gap: 12px;
    }
`;

export const StyledDiv2Dashbord = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 200px;

    span {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }
    span button {
        color: white;
        background: #212529;
        padding: 4px;

        border-radius: 8px;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    div {
        opacity: 0.5;
    }
`;
