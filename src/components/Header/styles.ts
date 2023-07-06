import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  z-index: 1;
  position: absolute;
`;

export const InitialsLogoWrapper = styled.div`
  padding: 1.5rem 3.5rem;
`;

export const InitialsLogo = styled.h3`
font-family: "Gloock", sans-serif;
  color: #ededed;
  font-size: 2rem;
`;

export const NavbarWrapper = styled.nav`
  padding: 1.5rem 3.5rem;
  align-items: center;
  display: flex;
`;

export const ListItems = styled.ul`
  display: flex;
  flex-direction: row;
  width: 38rem;
  justify-content: space-between;
`;

export const Item = styled.li`
  list-style: none;
  font-family: "Lato", sans-serif;
  font-weight: 700;
`;

export const Anchor = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: #ededed;

  &:hover { 
    transition: 0.2s;
    text-decoration: underline;
    color: #ededed;
  }
`;
