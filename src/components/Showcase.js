import React from "react";
import { motion } from "framer-motion";

// import Global Styles
import { 
    PaddingContainer,
    FlexContainer,
    Heading,
    ParaText,
    BlueText,
    IconContainer,
} from "../styles/Global.style";

// import Showcase Styles
import {
    ShowcaseparticleContainer,
    ShowcaseImageCard,
    Particle,
} from "../styles/Showcase.style";

// import Icons
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
import { FiFileText } from "react-icons/fi";

// import asset
import ProfileImage from "../assets/images/profile.png";
import ParticleImage from "../assets/scroll/particle.png";

import { fadeInLeftVariant, fadeInRightVariant } from "../utils/Variants";

 const Showcase = () => {
    return (
        <PaddingContainer
            id="Home"
            left="3%"
            right="10%"
            top="17%"
            bottom="10%"
            responsiveLeft='1rem'
            responsiveRight='1rem'
            responsiveTop='7rem'
        >
            <FlexContainer>
                {/* --left-content-- */}
                <motion.div
                    variants={fadeInLeftVariant}
                    initial="hidden"
                    whileInView="visible"
                >
                    <PaddingContainer right='3rem'>
                        <Heading as="h3" size="h3">Hello!</Heading>
                        <Heading
                            as="h2"
                            size="h2"
                            top="0.5rem"
                            bottom="1rem"
                        >
                            I'm <BlueText>Rahmat Rafid Akbar</BlueText>
                        </Heading>
                        <Heading as="h3" size="h3">
                            I'm a <BlueText>Fullstack Developer</BlueText> based in <BlueText>Bandung</BlueText>, <BlueText>Indonesia</BlueText>.
                        </Heading>
                        <ParaText as="p" top="2rem" bottom="4rem">
                            I'm a self-taught developer, I've been learning programming since 2020. I'm currently working as a freelance developer.
                            I'm also a student at <BlueText>Bandung Institute of Technology</BlueText> majoring in <BlueText>Informatics Engineering</BlueText>.
                        </ParaText>

                        {/* --social-icons-- */}
                        <FlexContainer
                            gap="20px"
                            responsiveFlex
                        >
                            <IconContainer color="white" size="1.6rem" target="_blank" href="https://www.linkedin.com/in/rahmatrafid/">
                                <BsLinkedin/>
                            </IconContainer>
                            <IconContainer color="white" size="1.6rem" target="_blank" href='https://github.com/Amike31'>
                                <BsGithub/>
                            </IconContainer>
                            <IconContainer color="white" size="1.6rem" target="_blank" href='https://www.instagram.com/'>
                                <BsInstagram/>
                            </IconContainer>
                            <IconContainer color="white" size='1.6rem' target="_blank" href='https://drive.google.com/file/d/1n8Cv-HzQTtRvBnC5G9v2kUlcM9449HmH/view?usp=sharing'>
                                <FiFileText/>
                            </IconContainer>
                        </FlexContainer>
                        </PaddingContainer>                    
                </motion.div>

                {/* --right-content-- */}
                <FlexContainer justify="flex-end"
                    as={motion.div}
                    variants={fadeInRightVariant}
                    initial="hidden"
                    whileInView="visible"
                >
                    <ShowcaseparticleContainer>
                        <ShowcaseImageCard>
                            <img src={ProfileImage} alt="ShowcaseImage" width="317" height="338" />                                                                                    
                        </ShowcaseImageCard>
                         <Particle
                            as={motion.img}
                            animate={{
                                x: [0, 100, 0],
                                rotate:360,
                                scale: [1, 0.9, 1],
                            }}
                            transition={{
                                duration: 18,
                                repeat: Infinity,
                            }}
                            src={ParticleImage}
                            alt="particle"
                            top="-80px"
                            left="20px"
                            bottom="0"
                            right="0"
                            rotate="60deg"
                        />
                        <Particle
                            as={motion.img}
                            animate={{
                                y: [0, 100, 0],
                                rotate:360,
                                scale: [1, 0.8, 1],
                            }}
                            transition={{
                                duration: 16,
                                repeat: Infinity,
                            }}
                            src={ParticleImage}
                            alt="particle"
                            top="50px"
                            right="-70px"
                            rotate="0deg"
                        />
                        <Particle
                            as={motion.img}
                            animate={{
                                y: [0, -100, 0],
                                rotate:360,
                                scale: [1, 0.67, 1],
                            }}
                            transition={{
                                duration: 14,
                                repeat: Infinity,
                            }}
                            src={ParticleImage}
                            alt="particle"
                            left="-70px"
                            bottom="10px"
                            rotate="50deg"
                        />

                    </ShowcaseparticleContainer>
                </FlexContainer>
            </FlexContainer>
        </PaddingContainer>
    )
}

export default Showcase;