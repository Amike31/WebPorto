import styled from "styled-components";

export const ContactForm = styled.form`
    width: 40%;

    @media(max-width: ${props => props.theme.breakpoints.mobile}) {
        width: 90%;
        margin: auto;
    }
`;

export const FormLabel = styled.label`
    color: ${props => props.theme.colors.para_text_color};
`;

export const FormInput = styled.input`
    width: 100%;
    background-color: ${props => props.theme.colors.primary_light};
    border: 1px solid ${props => props.theme.colors.para_text_color};
    color: ${props => props.theme.colors.para_text_color};
    border-radius: 5px;
    margin-top: 10px;
    padding: 15px;

    &::placeholder {
        color: ${props => props.theme.colors.para_text_color};
    }
`