import { FC } from "react";
import styles from "./Baskets.module.scss";
import { Product } from "../../../entities";

export const Baskets: FC = (): JSX.Element => {
  return (
    <div className={`container ${styles.baskets}`}>
      {[1, 2].map((e) => (
        <Product key={e} index={e} type="basket" />
      ))}
    </div>
  );
};
