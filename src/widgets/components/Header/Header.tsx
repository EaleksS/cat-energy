import { FC, useEffect, useState } from "react";
import styles from "./Header.module.scss";
import { Logo, Nav } from "../../../entities";

interface Props {
  nav?: "black" | "white";
}

export const Header: FC<Props> = ({ nav }): JSX.Element => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  return (
    <header
      className={`${styles.header}`}
      style={scroll > 100 ? { background: "rgba(104, 183, 56, 1)" } : {}}
    >
      <div className={`container ${styles.cont}`}>
        <Logo color={scroll > 100 ? "#fff" : ""} />
        <Nav color={scroll > 100 ? "white" : nav} />
      </div>
    </header>
  );
};
