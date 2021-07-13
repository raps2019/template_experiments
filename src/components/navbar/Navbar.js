import React, { useContext } from 'react';
import * as Styled from './Navbar.styles';
import { navContainerVariants, navChildVariants, navLogoVariants, navToggleSwitchVariants } from './variants';
import { useViewport } from '../../contexts/ViewportProvider';
import { ThemeContext } from '../../contexts/ThemeStore';
import ToggleSwitch from '../toggleSwitch/ToggleSwitch';

const Navbar = () => {
  const { width, height } = useViewport();
  const { currentTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <Styled.NavbarContainer
        variants={navContainerVariants}
        initial="initial"
        animate="animate"
      >
        <Styled.Navbar>
          <Styled.NavbarLogoContainer
          variants={navLogoVariants}>
            <Styled.NavbarLogo exact={true} to="/">
              Jellyfish Studios
            </Styled.NavbarLogo>
          </Styled.NavbarLogoContainer>
          <Styled.NavbarLinksContainer>
            <Styled.NavbarLinkContainer variants={navChildVariants}>
              <Styled.NavbarLink to="/work">WORK</Styled.NavbarLink>
            </Styled.NavbarLinkContainer>
            <Styled.NavbarLinkContainer variants={navChildVariants}>
              <Styled.NavbarLink to="/about">ABOUT</Styled.NavbarLink>
            </Styled.NavbarLinkContainer>
            <Styled.NavbarLinkContainer variants={navChildVariants}>
              <Styled.NavbarLink to="contact">CONTACT</Styled.NavbarLink>
            </Styled.NavbarLinkContainer>
          </Styled.NavbarLinksContainer>
          {/* {currentTheme === 'light' ? 'DARK MODE' : 'LIGHT MODE'} */}
          <Styled.ToggleSwitchContainer variants={navToggleSwitchVariants}>
          <ToggleSwitch></ToggleSwitch>
          </Styled.ToggleSwitchContainer>
        </Styled.Navbar>
      </Styled.NavbarContainer>
    </>
  );
};

export default Navbar;
