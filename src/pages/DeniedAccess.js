import React from 'react'
import {
    MainBody,
    Container,
    FlexContainer,
    PaddingContainer,
    BlueText,
    ParaText,
    Heading,
} from "../styles/Global.style";

const DeniedAccess = () => {
  return (
    <MainBody>
        <Container>
            <PaddingContainer top='42vh' responsiveTop='38vh'>
                <FlexContainer align='center' direction='column' gap='0.5rem'>
                    <Heading as='h1' size='h1'>
                        <BlueText>Access Denied</BlueText>
                    </Heading>
                    <Heading as='h3' size='h3'>
                        You do not have access to this page.
                    </Heading>
                    <ParaText>
                        Please contact the administrator if you need access (Some codes or apps can be private).
                    </ParaText>
                </FlexContainer>
            </PaddingContainer>            
        </Container>
    </MainBody>
  )
}

export default DeniedAccess