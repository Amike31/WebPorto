import styled from "styled-components";


export const MainBody = styled.div`
    background-color: ${props => props.theme.colors.primary};
    min-height: 100vh;
`;

export const Container = styled.div`
    width: 90%;
    max-width: 1280px;
    margin: 0 auto;
`;

export const PaddingContainer = styled.div`
    padding-top: ${props => props.top};
    padding-bottom: ${props => props.bottom};
    padding-left: ${props => props.left};
    padding-right: ${props => props.right};

    @media(max-width: ${props => props.theme.breakpoints.mobile}) {
        padding-top: ${props => props.responsiveTop};
        padding-bottom: ${props => props.responsiveBottom};
        padding-left: ${props => props.responsiveLeft};
        padding-right: ${props => props.responsiveRight};
    }
`;

export const FlexContainer = styled.div`
    display: flex;
    justify-content: ${props => props.justify};
    align-items: ${props => props.align};
    gap: ${props => props.gap};
    flex-direction: ${props => props.direction};

    & > div {
        flex: ${props => props.fullWidthChild && 1};
    }

    @media(max-width: ${props => props.theme.breakpoints.mobile}) {
        display: ${props => props.responsiveFlex? 'flex' : 'block'};
        flex-direction: ${props => props.responsiveDirection};
    }
`;

export const Heading = styled(PaddingContainer)`
    color: ${props => props.theme.colors.white};
    text-align: ${props => props.align};
    font-size: ${props => 
        props.size === 'h1' ? '4.5rem' :
        props.size === 'h2' ? '3rem' :
        props.size === 'h3' ? '2rem' :
        props.size === 'h4' ? '1.2rem' :
        '1rem'};

    @media(max-width: ${props => props.theme.breakpoints.mobile}) {
        font-size: ${props =>
            props.size === 'h1' ? '2.5rem' :
            props.size === 'h2' ? '2rem' :
            props.size === 'h3' ? '1.5rem' :
            props.size === 'h4' ? '1rem' :
            '0.875rem'};
    }
`;

export const BlueText = styled.span`
    color: ${props => props.theme.colors.secondary};
`;

export const ParaText = styled(PaddingContainer)`
    color: ${props => props.theme.colors.para_text_color};
    line-height: 2rem;
`;

export const IconContainer = styled.a`
    font-size: ${props => props.size};
    target: ${props => props.target};
    href: ${props => props.href};
    cursor: ${props => props.cursor};
    color: ${props => 
        props.color === 'white' ? props.theme.colors.white :
        props.color === 'black' ? props.theme.colors.black :
        props.color === 'blue' ? props.theme.colors.secondary :
        props.theme.colors.primary};
`;

export const Button = styled.button`
    display: inline-block;
    width: max-content;
    padding: 1rem 2rem;
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.primary_light};
    border: 1px solid ${props => props.theme.colors.gray};
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        color: ${props => props.theme.colors.primary_light};
        background-color: ${props => props.theme.colors.white};
    }
`;

export const FadeImage = styled.img`
    position: absolute;
    pointer-events: none;
    top: ${props => props.top};
    right: ${props => props.right};
    left: ${props => props.left};
    bottom: ${props => props.bottom};
    z-index: 0;

    @media(max-width: ${props => props.theme.breakpoints.mobile}) {
        display: none;
    }
`;
