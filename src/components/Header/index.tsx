import * as S from "./styles";

const Header = () => {
  return (
    <>
      <S.HeaderWrapper>
        <S.InitialsLogoWrapper>
          <S.InitialsLogo src="/logo.png" />
        </S.InitialsLogoWrapper>
        <S.NavbarWrapper>
          <S.ListItems>
            <S.Item>
              <S.Anchor href="/">Sobre mim</S.Anchor>
            </S.Item>
            <S.Item>
              <S.Anchor href="/">Projetos</S.Anchor>
            </S.Item>
            <S.Item>
              <S.Anchor href="/">Contato</S.Anchor>
            </S.Item>
          </S.ListItems>
        </S.NavbarWrapper>
      </S.HeaderWrapper>
    </>
  );
};

export default Header;
