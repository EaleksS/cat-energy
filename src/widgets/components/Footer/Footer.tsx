import { FC } from "react";
import styles from "./Footer.module.scss";
import { Logo } from "../../../entities";
import { FaVk, FaInstagram, FaFacebookF } from "react-icons/fa";

export const Footer: FC = (): JSX.Element => {
  return (
    <footer className={`${styles.footer}`} id="footer">
      <div className={`${styles.cont} container`}>
        <Logo img={false} />
        <div className={styles.social}>
          <FaVk size={38} className={styles.icon} />
          <FaInstagram size={30} className={styles.icon} />
          <FaFacebookF size={25} className={styles.icon} />
        </div>
      </div>
    </footer>
  );
};
