import React, { useContext } from 'react';
import * as Styled from './Navbar.styles';
import { navContainerVariants } from './variants';
import { useViewport } from '../../contexts/ViewportProvider';
import { ThemeContext } from '../../contexts/ThemeStore';

const Navbar = () => {
  const { width, height } = useViewport();
  const { currentTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <Styled.Navbar>
        <Styled.NavbarContainer
          variants={navContainerVariants}
          initial="initial"
          animate="animate"
        >
          <Styled.NavbarLogo exact={true} to="/">Jellyfish Studio</Styled.NavbarLogo>
          <Styled.NavbarLinksContainer>
            <Styled.NavbarLinkContainer>
              <Styled.NavbarLink to="/work">WORK</Styled.NavbarLink>
            </Styled.NavbarLinkContainer>
            <Styled.NavbarLinkContainer>
              <Styled.NavbarLink to="/about">ABOUT</Styled.NavbarLink>
            </Styled.NavbarLinkContainer>
            <Styled.NavbarLinkContainer>
              <Styled.NavbarLink to="contact">CONTACT</Styled.NavbarLink>
            </Styled.NavbarLinkContainer>
          </Styled.NavbarLinksContainer>
          <Styled.ThemeToggleContainer onClick={toggleTheme}>
            {currentTheme === 'light' ? 'DARK MODE' : 'LIGHT MODE'}
          </Styled.ThemeToggleContainer>

        </Styled.NavbarContainer>
      </Styled.Navbar>
    </>
  );
};

export default Navbar;
