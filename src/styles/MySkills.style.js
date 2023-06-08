import styled from "styled-components";

// grid with 3 columns
export const SkillsCardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    padding: 2rem 0;
    
    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        display: block;
        padding: 0;
    }
`

export const SkillsCard = styled.div`
    width: 170px;
    border: 1px solid #fff;
    padding: 1rem 0;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.primary_light};

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width: 100%;
        margin-top: 2rem;
    }
`