import { FC } from "react";
import styles from "./Basket.module.scss";
import { Baskets, Layout } from "../../widgets";
import { Button, Link, Text } from "../../shared";
import { RiDeleteBin5Fill } from "react-icons/ri";

export const Basket: FC = (): JSX.Element => {
  return (
    <Layout>
      <div className={`container ${styles.title}`}>
        <Text type="h1" mt="40px">
          Корзина
        </Text>
        <div className={styles.remove}>
          <Text>
            <RiDeleteBin5Fill /> Очистить корзину
          </Text>
        </div>
      </div>

      <Baskets />

      <div className={`container ${styles.payes}`}>
        <div className={styles.info}>
          <Text>
            Всего пицц:
            <b style={{ fontWeight: 600, color: "#68B738" }}> 3 шт.</b>
          </Text>
          <Link to="/catalog">Вернуться в каталог</Link>
        </div>
        <div className={styles.content}>
          <Text>
            Сумма заказа:
            <b style={{ fontWeight: 600, color: "#68B738" }}> 900 P.</b>
          </Text>
          <Button type="primary">Оплатить сейчас</Button>
        </div>
      </div>
    </Layout>
  );
};
