import { FC, useEffect, useState } from "react";
import styles from "./Nav.module.scss";
import { HiShoppingCart } from "react-icons/hi";
import { Text } from "../../../shared";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

interface Props {
  setIsActive?: (bool: boolean) => void;
  color?: "black" | "white";
}

export const Nav: FC<Props> = ({ color = "black" }): JSX.Element => {
  const navigate = useNavigate();

  const [pageUrl, setPageUrl] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setPageUrl(window.location.pathname);
    }, 0);
  }, [navigate]);

  return (
    <nav>
      <ul className={styles.ul}>
        <li
          style={
            pageUrl === "/"
              ? { borderColor: color === "black" ? "#68b738" : "#fff" }
              : {}
          }
          onClick={() => navigate("/")}
        >
          <Text type="h3" up color={color === "black" ? "#333" : "#fff"}>
            главная
          </Text>
        </li>
        <li
          style={
            pageUrl === "/catalog"
              ? { borderColor: color === "black" ? "#68b738" : "#fff" }
              : {}
          }
          onClick={() => navigate("/catalog")}
        >
          <Text type="h3" up color={color === "black" ? "#333" : "#fff"}>
            Каталог продукции
          </Text>
        </li>
        <li
          style={
            pageUrl === "/program"
              ? { borderColor: color === "black" ? "#68b738" : "#fff" }
              : {}
          }
          onClick={() => navigate("/program")}
        >
          <Text type="h3" up color={color === "black" ? "#333" : "#fff"}>
            подбор программы
          </Text>
        </li>
        <li onClick={() => navigate("/basket")}>
          <Text type="h3" up color={color === "black" ? "#333" : "#fff"}>
            <HiShoppingCart />
          </Text>
          <div className={styles.cart}>2</div>
        </li>
      </ul>
    </nav>
  );
};
