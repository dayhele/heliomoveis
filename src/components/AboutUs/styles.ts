import styled from "styled-components";

export const AboutUsWrapper = styled.div`
  background-color: #202020;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 6rem 6.5rem 0 6.5rem;
  width: 80rem;
`;

export const Title = styled.h3`
  color: #ededed;
  font-size: 32px;
  font-family: "Anonymous Pro", sans-serif;
  font-weight: 400;
  text-transform: uppercase;
  border-bottom: 1px solid #ededed;
  margin-bottom: 3rem;
  max-width: 12rem;
`;

export const TextContent = styled.p`
  color: #ededed;
  font-size: 20px;
  font-family: "Lato", sans-serif;
  font-weight: 300;
`;

export const Span = styled.span`
  font-weight: 600;
`;

export const ImagesWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: start;
  margin-top: 6.5rem;
`;

export const FurnitureImage = styled.img `
    width: 500px;
    filter: brightness(80%);
`;

export const ButtonWrapper = styled.div`
  width: 50%;
  margin-top: 6.5rem;
`;

export const PortfolioButton = styled.a`
    cursor: pointer;
    color: #ededed;
    font-family: "Anonymous Pro", sans-serif;
    font-size: 18px;
    

    &:hover { 
        border-bottom: 1px solid #ededed
    }
`;