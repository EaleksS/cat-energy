import { FC } from "react";
import styles from "./Products.module.scss";
import { Product } from "../../../entities";

export const Products: FC = (): JSX.Element => {
  return (
    <div className={`container ${styles.products}`}>
      {[1, 2, 3, 4, 5, 6, 7].map((e) => (
        <Product key={e} index={e} />
      ))}
    </div>
  );
};
