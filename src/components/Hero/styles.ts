import styled from "styled-components";

export const HeroWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-attachment: fixed;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  z-index: 1;
  position: absolute;
`;

export const Title = styled.h1`
  color: #ededed;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 4px;
  font-family: "Gloock", sans-serif;
  font-size: 42px;
  animation: ease-in-hero-text-h2 cubic-bezier(0, 0, 0.58, 1) 1.8s forwards;
`;

export const Subtitle = styled.p`
  width: max-content;
  font-size: 20px;
  font-weight: 300;
  color: #ededed;
  font-family: "Lato", sans-serif;
  letter-spacing: 1.5px;
  margin-right: 1%;
  animation: ease-in-hero-text-h3 cubic-bezier(0, 0, 0.58, 1) 1.9s forwards;
  text-align: center;
`;

export const CursorIconWrapper = styled.div`
  bottom: 12%;
  position: absolute;
`;

export const CursorIcon = styled.img`
  width: 4rem;
`;

export const ButtonScroll = styled.a`
  text-decoration: none;
  cursor: pointer;
`;
