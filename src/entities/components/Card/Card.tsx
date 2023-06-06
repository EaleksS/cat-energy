import { FC } from "react";
import styles from "./Card.module.scss";
import { Link, Text } from "../../../shared";

interface Props {
  title?: string;
  desc?: string;
  url?: string;
  link?: string;
  to?: string;
}

export const Card: FC<Props> = ({
  title = "title",
  desc = "desc",
  url = "/img/cat_back.svg",
  link = "link",
  to = ".#",
}): JSX.Element => {
  return (
    <div className={styles.card}>
      <div className={styles.title}>
        <img src={url} alt="cat" />
        <Text type="h2" up>
          {title}
        </Text>
      </div>
      <Text>{desc}</Text>
      <Link arrow up to={to}>
        {link}
      </Link>
    </div>
  );
};
