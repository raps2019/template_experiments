import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GlobalContainer } from '../../globalStyles/GlobalStyles';

export const Navbar = styled(motion.nav)`
  background: ${(props) => props.theme.navbar.background};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  height: 80px;
  position: sticky;
  top: 0;
  z-index: 999;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled(GlobalContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`;

export const NavbarLogo = styled(NavLink)`
  font-family: 'Pacifico', cursive;
  text-decoration: none;
  font-size: 2rem;
  color: ${(props) => props.theme.navbar.text};
  transition: all 250ms ease-in;

  &.active,
  :hover {
    text-shadow: 1px 1px 10px ${(props) => props.theme.navbar.primary};
  }
`;

export const NavbarLinksContainer = styled.div`
  display: flex;
  gap: 25px;
`;

export const NavbarLinkContainer = styled.div``;

export const NavbarLink = styled(NavLink)`
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
    background: ${(props) => props.theme.navbar.secondary};
  }

  &:hover::after {
    transform: scaleX(1);
    background: ${(props) => props.theme.navbar.secondary};
  }

  &.active::after {
    transform: scaleX(1);
    background: ${(props) => props.theme.navbar.primary};
  }
`;

export const ThemeToggleContainer = styled.div``;
