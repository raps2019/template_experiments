import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GlobalContainer } from '../../globalStyles/GlobalStyles';

export const NavbarContainer = styled(motion.div)`
  width: 100%;
  height: 100px;
`

export const Navbar = styled.nav`
  background: ${(props) => props.theme.background1};
  display: flex;
  justify-content: space-between;
  padding: 0 35px;
  width: 100%;
  height: 100%;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 999;
  transition: 0.8s all ease;
  /* border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px; */



  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarLogoContainer = styled(motion.div)`
`;

export const NavbarLogo = styled(NavLink)`
  font-family: 'Pacifico', cursive;
  text-decoration: none;
  font-size: 2rem;
  color: ${(props) => props.theme.navbar.text};
  transition: all 250ms ease-in;

  &.active,
  :hover {
    text-shadow: 1px 1px 10px ${(props) => props.theme.primary};
  }
`;

export const NavbarLinksContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 50px;
`;

export const NavbarLinkContainer = styled(motion.div)``;

export const NavbarLink = styled(NavLink)`
  font-size: 1rem;
  text-decoration: none;
  font-weight: 600;
  display: inline-block;
  color: ${(props) => props.theme.navbar.text};
  transition: all 250ms ease-in;

  &.active,
  :hover {
  }

  &::after {
    content: '';
    width: 100%;
    height: 5px;
    display: block;
    background: black;
    transform: scaleX(0);
    transition: all 250ms ease-in;
    background: ${(props) => props.theme.secondary};
  }

  &:hover::after {
    transform: scaleX(1);
    background: ${(props) => props.theme.secondary};
  }

  &.active::after {
    transform: scaleX(1);
    background: ${(props) => props.theme.primary};
  }
`;

export const ToggleSwitchContainer = styled(motion.div)`
display: flex;
align-items: center;
justify-content: center;
`;
