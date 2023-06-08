import React from "react";
import { motion } from "framer-motion";

// import GlobalStyle
import { 
    PaddingContainer,
    FlexContainer,
    Heading,
    ParaText,
    BlueText,
    IconContainer,
} from "../styles/Global.style";

// import MySkills style
import {
    SkillsCardContainer,
    SkillsCard,
} from "../styles/MySkills.style";

// import Skills data
import { Skills } from "../utils/Data";

import { fadeInLeftVariant, fadeInRightVariant } from "../utils/Variants";

const MySkills = () => {
    return (
        <PaddingContainer
            id="Skills"
            top="10%"
            bottom="10%"
            responsiveLeft='1rem'
            responsiveRight='1rem'
        >
            <FlexContainer 
                fullWidthChild
                responsiveFlex
                responsiveDirection='column-reverse'
            >
                {/* --left-section-- */}
                <SkillsCardContainer
                    as={motion.div}
                    variants={fadeInLeftVariant}
                    initial='hidden'
                    whileInView='visible'
                >
                    {Skills.map((skill) => (
                        <SkillsCard>
                            <IconContainer size='2.3rem' color="blue" >
                                {skill.icon}
                            </IconContainer>
                            <Heading as='h4' size='h4'>
                                {skill.tech}
                            </Heading>
                        </SkillsCard>
                    ))}
                </SkillsCardContainer>

                {/* --right-section-- */}
                <motion.div
                    variants={fadeInRightVariant}
                    initial='hidden'
                    whileInView='visible'
                >
                    <Heading as='h4' size='h4'>
                        MY SKILLS
                    </Heading>
                    <Heading as='h2' size='h2'>
                        What <BlueText>I can do</BlueText>
                    </Heading>
                    <ParaText top='2rem' bottom='1.5rem'>
                        As a Developer, I have experience in building websites and web applications using JavaScript, React, HTML, CSS, and Bootstrap. 
                        I also have experience working with Node.js, Express.js, MongoDB, and MySQL. I am also familiar with Python, C++, and Java. 
                        My strong experience in building responsive and dynamic user interfaces, and my ability to learn new technologies quickly, 
                        allowed me to create interactive and user-friendly websites.
                    </ParaText>
                    <ParaText >
                        I have experience in working with Git, GitHub, Bitbucket, and Heroku. I have used these tools to collaborate with other developers and maintain my projects.
                        I am also familiar with Agile Methodology and Scrum Framework. I have used these frameworks to work in a team and deliver projects on time.
                        My experience in web development allows me to work with different APIs and libraries to build websites and web applications.
                        Also, it derives me to create efficient and sustainable code that can adept to future changes.
                    </ParaText>
                </motion.div>
            </FlexContainer>
        </PaddingContainer>
    )
}

export default MySkills