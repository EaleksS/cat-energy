import { FC, ReactNode } from "react";
import styles from "./Layout.module.scss";
import { Up } from "../../../entities";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Contact } from "../Contact/Contact";

interface Props {
  children: ReactNode;
  nav?: "black" | "white";
}

export const Layout: FC<Props> = ({ children, nav = "black" }): JSX.Element => {
  return (
    <div className={styles.wrapper} id="wrapper">
      {nav === "white" && (
        <div className={styles.bg}>
          <img src="/img/background.png" alt="cat" />
        </div>
      )}
      <Header nav={nav} />
      <main className={styles.main}>{children}</main>
      <Contact />
      <Footer />
      <Up />
    </div>
  );
};
