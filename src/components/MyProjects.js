import React from "react";
import { motion } from "framer-motion";

// import GlobalStyle
import { 
    PaddingContainer,
    Heading,
    BlueText,
} from "../styles/Global.style";

// import Projects style
import Project from "./layouts/Project";
    
// import Projects data
import { Projects } from "../utils/Data";

import { fadeInDownVariant } from "../utils/Variants";

const MyProjects = () => {
    return (
        <PaddingContainer
            id="Projects"
            top="5%"
            bottom="5%"
            responsiveTop='20%'
            responsiveLeft='1rem'
            responsiveRight='1rem'
        >
            <Heading as={motion.h4} size='h4'
                variants={fadeInDownVariant}
                initial='hidden'
                whileInView='visible'
            >
                MY PROJECTS
            </Heading>
            <Heading as={motion.h2} size='h2'
                variants={fadeInDownVariant}
                initial='hidden'
                whileInView='visible'
            >
                What <BlueText>I have built</BlueText>
            </Heading>

            {Projects.map((project) => (
                <PaddingContainer key={project.id} top='5rem' bottom='5rem'>
                    <Project data={project}/>
                </PaddingContainer> 
            ))}

        </PaddingContainer>
    )
}

export default MyProjects