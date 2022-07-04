import styled from "styled-components";

export const NavStyles = styled.nav`
    color: white;
    min-height: 15vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1rem;
    padding-bottom: 3rem;
    

    a{
        font-size: 5rem;
        font-family: 'EB Garamond', serif;
        padding-bottom: 1rem;
    }
`;

export const NavItems = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    div {
        margin-left: 3rem;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    h3 {
        font-size: 1rem;
        padding: 0.25;
    }
    svg{
        font-size: 1.5rem;
    }
`;
