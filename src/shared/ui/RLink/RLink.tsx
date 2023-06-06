import { FC, ReactNode } from "react";
import styles from "./RLink.module.scss";
import { Text } from "../..";
import { Link } from "react-router-dom";
import { MdOutlineArrowRightAlt } from "react-icons/md";

interface Props {
  children?: ReactNode;
  to?: string;
  blank?: boolean;
  up?: boolean;
  arrow?: boolean;
}

export const RLink: FC<Props> = ({
  children = "link",
  to = ".#",
  blank = false,
  up = false,
  arrow = false,
}): JSX.Element => {
  return (
    <Link to={to} className={styles.link} target={blank ? "_blank" : ""}>
      <Text type="h3" up={up}>
        {children}
        {arrow && <MdOutlineArrowRightAlt className={styles.icon} />}
      </Text>
    </Link>
  );
};
