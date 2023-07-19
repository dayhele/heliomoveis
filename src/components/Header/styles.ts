import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  z-index: 1;
  position: absolute;
`;

export const InitialsLogoWrapper = styled.div`
  padding: 1.5rem 6.5rem 0 6.5rem
`;

export const InitialsLogo = styled.img`
  width: 3.5rem;
`;

export const NavbarWrapper = styled.nav`
  max-width: 33rem;
  padding: 1.5rem 6.5rem 0 6.5rem;
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
  font-family: "Anonymous Pro", sans-serif;
  font-size: 18px;
  font-weight: 400;
  text-transform: uppercase;
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
