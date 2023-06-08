import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion';

// import Global Styles
import {
    PaddingContainer,
    FlexContainer,
    Container,
    BlueText,
} from "../styles/Global.style";

// import Navbar Styles
import {
    NavbarContainer,
    Logo,
    MenuIcon,
} from "../styles/Navbar.style";

import { Theme } from '../utils/Theme';
import { GiHamburgerMenu } from "react-icons/gi";
import NavMenu from './layouts/NavMenu';

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      window.pageYOffset > 50 ? setSticky(true) : setSticky(false);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <NavbarContainer bgColor={ sticky ? Theme.colors.primary : 'transparent' }>
        <PaddingContainer 
            top='1.45rem' bottom='1.3rem'
            responsiveLeft='1rem' responsiveRight='1rem'
        >
            <Container>
                <FlexContainer 
                    justify='space-between' 
                    responsiveFlex
                >
                    {/* --left-logo-- */}
                    <Logo>Self-<BlueText>Portfolio</BlueText></Logo>
                    {/* --right-menu-icon-- */}
                    <MenuIcon onClick={() => {setNavbar(true)}}
                        as={motion.div}
                        whileHover={{ scale: 1.2 }}
                    >
                        <GiHamburgerMenu />
                    </MenuIcon>
                </FlexContainer>
            </Container>

            <AnimatePresence>                    
                {navbar && <NavMenu setNavbar={setNavbar} />}
            </AnimatePresence>
        </PaddingContainer>
    </NavbarContainer>
  )
}

export default Navbar