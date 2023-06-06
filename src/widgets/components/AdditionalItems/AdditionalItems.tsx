import { FC } from "react";
import styles from "./AdditionalItems.module.scss";
import { Button, Text } from "../../../shared";

export const AdditionalItems: FC = (): JSX.Element => {
  return (
    <div className={` ${styles.additional_items}`}>
      <div className={`container ${styles.content}`}>
        <Text type="h2">Дополнительные товары</Text>
        <div className={styles.items}>
          <div className={styles.item}>
            {[1, 2, 3, 4].map((e) => (
              <div
                key={e}
                className={styles.additional}
                style={e === 4 ? { borderBottom: "1px solid #cdcdcd" } : {}}
              >
                <Text type="h3" up>
                  Сахарозаменитель
                </Text>
                <Text>1 упаковка (100 г)</Text>
                <Text>200 Р</Text>
                <Button type="primary">заказать</Button>
              </div>
            ))}
          </div>
          <div className={styles.banner}>
            <img
              src="/img/banner.png"
              alt="banner"
              className={styles.banner_img}
            />

            <img
              src="/img/icon/icon_gift.svg"
              alt="icon_gift"
              className={styles.icon}
            />
            <Text center color="#fff" mt="55px">
              Закажите все <br />
              и получите чехол для <br />
              кота в подарок!
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};
