import React from 'react'
import { motion } from 'framer-motion';

import { fadeInUpVariant } from '../utils/Variants';

// import Global Styles
import { 
    PaddingContainer,
    Heading,
    BlueText,
    FlexContainer,
    Button,
} from "../styles/Global.style";

// import Footer Styles
import {
    ContactForm,
    FormLabel,
    FormInput,
} from "../styles/Footer.style";

const Footer = () => {
  return (
    <PaddingContainer id='Contact' top='5%' bottom='5%'>
        <Heading as={motion.h4} size='h4' align='center'
            variants={fadeInUpVariant}
            initial='hidden'
            whileInView='visible'         
        >
            MY CONTACT
        </Heading>
        <Heading as={motion.h2} size='h2' align='center'
            variants={fadeInUpVariant}
            initial='hidden'
            whileInView='visible'
        >
            Contact Me <BlueText>Here</BlueText>
        </Heading>

        <PaddingContainer top='3rem'>
            <FlexContainer justify='center'>
                <ContactForm
                    as={motion.form}
                    variants={fadeInUpVariant}
                    initial='hidden'
                    whileInView='visible'
                >
                    <PaddingContainer bottom='2rem'>
                        <FormLabel>Name:</FormLabel>
                        <FormInput type='text' placeholder='Enter your name'/>
                    </PaddingContainer>
                    <PaddingContainer bottom='2rem'>
                        <FormLabel>Email:</FormLabel>
                        <FormInput type='text' placeholder='Enter your email'/>
                    </PaddingContainer>
                    <PaddingContainer bottom='2rem'>
                        <FormLabel>Message:</FormLabel>
                        <FormInput type='textarea' placeholder='Enter your message'/>
                    </PaddingContainer>
                    <FlexContainer
                        justify='center'
                        responsiveFlex
                    >
                        <Button type='submit'>Send Message</Button>
                    </FlexContainer>
                </ContactForm>
            </FlexContainer>
        </PaddingContainer>
    </PaddingContainer>
  )
}

export default Footer