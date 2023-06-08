import React from 'react'
import { motion } from 'framer-motion';

// import Global Styles
import {
    PaddingContainer,
    FlexContainer,
} from "../../styles/Global.style";

// import Navbar Styles
import {
    NavMenuContainer,
    MenuIcon,
    MenuItem,
} from "../../styles/Navbar.style";

// import AiOutlineClose
import { AiOutlineClose } from "react-icons/ai";
import { navLinks } from '../../utils/Data';
import { slideInLeftVariant } from '../../utils/Variants';

const NavMenu = ({ setNavbar }) => {
  return (
    <NavMenuContainer
        as={motion.div}
        variants={slideInLeftVariant}
        initial='hidden'
        animate='visible'
        exit='exit'
    >
        {/* --close-button-- */}
        <PaddingContainer 
            left='5%' right='5%' top='2rem'
            responsiveTop='0' responsiveRight='0' responsiveLeft='0'
        >
            <FlexContainer
                justify='flex-end' 
                responsiveFlex
            >
                <MenuIcon onClick={() => setNavbar(false)}
                    as={motion.a}
                    whileHover={{ scale: 1.2 }}
                >
                    <AiOutlineClose />
                </MenuIcon>
            </FlexContainer>
        </PaddingContainer>

        {/* --menu-items-- */}
        <PaddingContainer top='6%' responsiveTop='0'>
            <FlexContainer direction='column' align='center'
                responsiveFlex
            >
                {navLinks.map((item) => (
                    <MenuItem href={`${item.href}`} onClick={() => setNavbar(false)}
                        as={motion.a}
                        whileHover={{ scale: 1.1 }}
                    >
                        {item.name}
                    </MenuItem>
                ))}                
            </FlexContainer>
        </PaddingContainer>

    </NavMenuContainer>
  )
}

export default NavMenu