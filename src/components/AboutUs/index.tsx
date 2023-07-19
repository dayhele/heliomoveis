import * as S from "./styles";

const AboutUs = () => {
  return (
    <>
      <S.AboutUsWrapper id="aboutUs">
        <S.ContentWrapper>
          <S.Title>Sobre mim</S.Title>
          <S.TextContent>
            Me chamo Hélio, natural de Lages, serra catarinense. Atualmente
            possuo minha fábrica de móveis em Curitiba, Paraná. Trabalho com o
            ramo de movelaria há mais de 30 anos e sempre busco entregar
            sofisticação, modernidade e qualidade nos projetos que executo.{" "}
            <br></br>
            <br></br>
            Realizo um serviço ponta-a-ponta onde: captamos as{" "}
            <S.Span>ideias</S.Span> que o cliente deseja, escolhemos as cores e
            acessórios baseados nas
            <S.Span> tendências do mercado</S.Span>, realizo o protótipo através
            de um projeto 3D, e assim que aprovado realizamos a execução,
            montagem e manutenção dos móveis{" "}
            <S.Span>sob medida para você</S.Span>.
          </S.TextContent>
          <S.ButtonWrapper>
            <S.PortfolioButton>ver portfólio -</S.PortfolioButton>
          </S.ButtonWrapper>
        </S.ContentWrapper>
        <S.ImagesWrapper>
          <S.FurnitureImage
            src="/site-image4.svg"
            alt="Imagens de móveis em MDF"
          />
        </S.ImagesWrapper>
      </S.AboutUsWrapper>
    </>
  );
};

export default AboutUs;
