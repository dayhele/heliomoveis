import * as S from "./styles";

const Hero = () => {
  return (
    <>
      <S.HeroWrapper>
        <video muted autoPlay loop>
          <source src="motion.mp4" type="video/mp4" />
        </video>
        <S.ContentWrapper>
          <S.Title>HÉLIO MÓVEIS¨</S.Title>
          <S.Subtitle>verdadeiramente sob medida</S.Subtitle>
        </S.ContentWrapper>
      </S.HeroWrapper>
    </>
  );
};

export default Hero;
