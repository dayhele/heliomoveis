import * as S from "./styles";

const Header = () => {
  return (
    <>
      <S.HeaderWrapper>
        <S.InitialsLogoWrapper>
          <S.InitialsLogo>HM¨</S.InitialsLogo>
        </S.InitialsLogoWrapper>
        <S.NavbarWrapper>
          <S.ListItems>
            <S.Item>
              <S.Anchor href="/">HOME</S.Anchor>
            </S.Item>
            <S.Item>
              <S.Anchor href="/">SOBRE NÓS</S.Anchor>
            </S.Item>
            <S.Item>
              <S.Anchor href="/">PROJETOS</S.Anchor>
            </S.Item>
            <S.Item>
              <S.Anchor href="/">CONTATO</S.Anchor>
            </S.Item>
          </S.ListItems>
        </S.NavbarWrapper>
      </S.HeaderWrapper>
    </>
  );
};

export default Header;
