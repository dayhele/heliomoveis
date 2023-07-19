import { motion, cubicBezier } from "framer-motion";

import * as S from "./styles";

const Hero = () => {
  const easing = cubicBezier(0, 0, 0.58, 1);
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
            <S.Title>HÉLIO MÓVEIS</S.Title>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ y: 30, opacity: 1 }}
            transition={{ easing: "easeIn", duration: 1.3, delay: 0.2 }}
          >
            <S.Subtitle>verdadeiramente sob medida</S.Subtitle>
          </motion.div>
        </S.ContentWrapper>
      </S.HeroWrapper>
    </>
  );
};

export default Hero;
