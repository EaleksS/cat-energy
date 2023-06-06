import { FC } from "react";
import styles from "./Product.module.scss";
import { Button, Text } from "../../../shared";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { BsDashSquare, BsPlusSquare } from "react-icons/bs";

interface Props {
  index: number;
  type?: "basket" | "catalog";
}

export const Product: FC<Props> = ({
  index,
  type = "catalog",
}): JSX.Element => {
  switch (type) {
    case "basket":
      return (
        <div className={styles.basket}>
          <img
            src={
              index % 2 === 0
                ? "/img/products/catenrgy500.png"
                : "/img/products/catenrgy1000.png"
            }
            alt="product"
          />
          <div className={styles.title}>
            <Text type="h3" up>
              Cat Energy PRO
            </Text>
            <Text>Курица, 500г</Text>
          </div>
          <div className={styles.count}>
            <BsDashSquare className={`${styles.icon}`} />
            <Text>2</Text>
            <BsPlusSquare className={`${styles.icon}`} />
          </div>
          <div className={styles.price}>4000 P.</div>
          <div className={styles.delete}>
            <AiOutlineCloseSquare className={`${styles.icon}`} />
          </div>
        </div>
      );

    default:
      return (
        <div className={styles.product}>
          <img
            src={
              index % 2 === 0
                ? "/img/products/catenrgy500.png"
                : "/img/products/catenrgy1000.png"
            }
            alt="product"
          />
          <div className={styles.content}>
            <Text type="h3" center up>
              Cat Energy PRO <br /> 1000 г
            </Text>
            <ul>
              <li>
                <Text>Масса</Text>
                <Text>500 г</Text>
              </li>
              <li>
                <Text>Вкус</Text>
                <Text>Курица</Text>
              </li>
              <li>
                <Text>Цена</Text>
                <Text>700 Р.</Text>
              </li>
            </ul>
            <Button type="primary" mt="33px">
              заказать
            </Button>
          </div>
        </div>
      );
  }
};
