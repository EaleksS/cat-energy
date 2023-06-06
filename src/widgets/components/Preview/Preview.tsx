import { FC, useEffect, useRef } from "react";
import styles from "./Preview.module.scss";
import { Button, Text } from "../../../shared";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const Preview: FC = (): JSX.Element => {
  const navigate = useNavigate();

  const img1 = useRef<HTMLImageElement>(null);

  const parallax = (e: MouseEvent) => {
    if (!img1.current) return;

    const x1 = e.clientX / 1000;
    const y1 = e.clientY / 500;

    img1.current.style.transform = `translateX(${x1}rem) translateY(${y1}rem)`;
  };

  useEffect(() => {
    document.addEventListener("mousemove", parallax);

    return () => document.removeEventListener("mousemove", parallax);
  }, []);

  return (
    <div className={`${styles.preview} container`}>
      <motion.div
        className={styles.title}
        initial={{ y: -200, opacity: 0, scale: 0 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Text type="h1">
          Функциональное <br /> питание для котов
        </Text>
        <Text type="h3" mt="3rem" fw="400" up>
          Занялся собой? Займись котом!
        </Text>

        <Button mt="3rem" type="primary" onClick={() => navigate("/program")}>
          подобрать программу
        </Button>
      </motion.div>
      <div className={styles.img}>
        <motion.img
          ref={img1}
          src={`/img/cat-energy.png`}
          alt="img"
          className={styles.bg}
          initial={{ y: -200, opacity: 0, scale: 0 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
        />
      </div>
    </div>
  );
};
