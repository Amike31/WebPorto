import styled from "styled-components";

export const NavbarContainer = styled.div`
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 10;
    transition: all 0.3s ease-in;
    background-color: ${props => props.bgColor};
`;

export const Logo = styled.p`
    font-size: 1.7rem;
    font-weight: ${props => props.theme.fonts.weight.medium};
    color: white;
`;

export const MenuIcon = styled.a`
    color: ${props => props.theme.colors.secondary};
    font-size: 1.6rem;
    cursor: pointer;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
`;

// if in mobile view, show as box at the top right
export const NavMenuContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background-color: ${props => props.theme.colors.primary_light};
    z-index: 1;

    @media(max-width: ${props => props.theme.breakpoints.mobile}) {
        right: 0;
        left: auto;
        background-color: ${props => props.theme.colors.primary_light};
        max-width: 40%;
        max-height: 30%;
        border-radius: 0.8rem 0.8rem 0.8rem 3rem;
        padding: 1rem;
    }
`;

export const MenuItem = styled.a`
    color: #fff;
    font-size: 2.5rem;
    margin-top: 3.2rem;
    cursor: pointer;
    text-decoration: none;
    letter-spacing: 0.15rem;
    font-style: italic;

    @media(max-width: ${props => props.theme.breakpoints.mobile}) {
        font-style: normal;
        font-size: 1rem;
        letter-spacing: 0.1rem;
        font-weight: ${props => props.theme.fonts.weight.bold};
        margin-top: 0.44rem;
        margin-bottom: 1rem;
    }
`;
