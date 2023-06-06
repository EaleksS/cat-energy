import { FC } from "react";
import styles from "./Work.module.scss";
import { Text } from "../../../shared";

interface Props {
  url?: string;
  index?: number;
  desc?: string;
}

export const Work: FC<Props> = ({
  url = "/img/icon/icon_leaf.svg",
  index = 1,
  desc = "desc",
}): JSX.Element => {
  return (
    <div className={styles.work}>
      <div className={styles.bg}>{index}</div>
      <div className={styles.content}>
        <div className={styles.img}>
          <img src={url} alt="icon" />
        </div>
        <Text>{desc}</Text>
      </div>
    </div>
  );
};
