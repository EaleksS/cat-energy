import { FC } from "react";
import styles from "./Logo.module.scss";
import { Text } from "../../../shared";
import { useNavigate } from "react-router-dom";

interface Props {
  color?: string;
  img?: boolean;
}

export const Logo: FC<Props> = ({
  color = "#333",
  img = true,
}): JSX.Element => {
  const navigate = useNavigate();

  return (
    <div className={styles.logo} onClick={() => navigate("/")}>
      {img && <img src="/img/logocat.svg" alt="logo" />}
      <Text type="h2" up fw="200" color={color}>
        <b>cat</b> energy
      </Text>
    </div>
  );
};
