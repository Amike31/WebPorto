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

const OnDeployment = () => {
  return (
    <MainBody>
        <Container>
            <PaddingContainer top='42vh' responsiveTop='38vh'>
                <FlexContainer align='center' direction='column' gap='0.5rem'>
                    <Heading as='h1' size='h1'>
                        <BlueText>Not Avaliable</BlueText>
                    </Heading>
                    <Heading as='h3' size='h3'>
                        The Content is still under deployment.
                    </Heading>
                    <ParaText>
                        This content isn't avaliable yet and still under adjustment. It will be available soon, please check back later.
                    </ParaText>
                </FlexContainer>
            </PaddingContainer>            
        </Container>
    </MainBody>
  )
}

export default OnDeployment