import React from 'react'
import { motion } from 'framer-motion';

// import GlobalStyle
import {
    PaddingContainer,
    Heading,
    FlexContainer,
    ParaText,
    IconContainer,
    Button,
} from "../../styles/Global.style";

// import Project style
import {
    TechStackCard,
    ProjectImageContainer,
    ProjectImage,
} from "../../styles/MyProject.style";

// import FaGithub
import { FaGithub } from 'react-icons/fa';

import { fadeInLeftVariant, fadeInRightVariant } from '../../utils/Variants';

const Project = ({ data }) => {
    
    return (
        <FlexContainer fullWidthChild
            direction={ data.reverse ? 'row-reverse' : 'row' }
        >
        {/* --left-section-- */}
        <motion.div
            variants={ data.reverse ? fadeInRightVariant : fadeInLeftVariant }
            initial='hidden'
            whileInView='visible'
        >
            <FlexContainer align='center' gap='1rem'>
            <Heading as='h3' size='h3'>
                {data.project_name}
            </Heading>
            <IconContainer color='blue' size='2rem' target='_blank' href={ data.source_code }>
                <FaGithub />
            </IconContainer>
            </FlexContainer>

            <PaddingContainer top='1rem'>
            <FlexContainer gap='1.5rem'>
                {data.tech_stack.map((tech) => (
                    <TechStackCard>{tech}</TechStackCard>
                ))}
            </FlexContainer>
            </PaddingContainer>

            <ParaText top='1.5rem' bottom='2rem'>
                {data.project_description}
            </ParaText>
            <FlexContainer gap='2rem'>
                <Button onClick={() => { window.open(data.project_url, '_blank') }}>
                    Visit { data.project_type }
                </Button>
                <Button onClick={() => { window.open(data.images, '_blank') }}>
                    More Images
                </Button>
            </FlexContainer>
            

        </motion.div>

        {/* --right-section-- */}
        <div>
            <ProjectImageContainer justify={ data.reverse ? 'flex-start' : 'flex-end' }>
                <ProjectImage src={data.project_image} alt={data.project_name} />
            </ProjectImageContainer>
        </div>
        </FlexContainer>
    )
}

export default Project