import styled from "styled-components";

export const ShowcaseparticleContainer = styled.div`
    position: relative;
    left: 3rem;
    @media(max-width: ${props => props.theme.breakpoints.mobile}) {
        display: none;
    }
`

export const ShowcaseImageCard = styled.div`
    border: 1px solid white;
    width: max-content;
    padding-top: 2rem;
    border-radius: 1rem;
    position: relative;
    overflow: hidden;
`

export const Particle = styled.img`
    position: absolute;
    top: ${props => props.top};
    left: ${props => props.left};
    right: ${props => props.right};
    bottom: ${props => props.bottom};
    transform: rotate(${props => props.rotate});
`

