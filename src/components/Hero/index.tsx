import { motion } from "framer-motion";

import * as S from "./styles";

const Hero = () => {
  return (
    <>
      <S.HeroWrapper>
        <video muted autoPlay loop>
          <source src="motion.mp4" type="video/mp4" />
        </video>
        <S.ContentWrapper>
          <motion.div
            animate={{ y: 32 }}
            transition={{ easing: "easeIn", duration: 1 }}
          >
            <S.Title>Hélio Móveis</S.Title>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ y: 30, opacity: 1 }}
            transition={{ easing: "easeIn", duration: 1.3, delay: 0.2 }}
          >
            <S.Subtitle>verdadeiramente sob medida</S.Subtitle>
          </motion.div>
        </S.ContentWrapper>
        <motion.div
          style={{ position: "absolute", bottom: "12%" }}
          initial={{ opacity: 0 }}
          animate={{ y: 35, opacity: 1 }}
          transition={{ easing: "easeOut", duration: 1, delay: 1.2 }}
        >
          <S.ButtonScroll href="#aboutUs">
          <S.CursorIcon
            src="/mouse-cursor.svg"
            alt="Icone de cursor indicando scroll para baixo"
          />
          </S.ButtonScroll>
        </motion.div>
      </S.HeroWrapper>
    </>
  );
};

export default Hero;
