import { FC } from "react";
import styles from "./Contact.module.scss";
import { MapYan } from "../../../entities";
import { Text } from "../../../shared";

export const Contact: FC = (): JSX.Element => {
  return (
    <div className={styles.contact}>
      <div className={styles.map}>
        <MapYan />
      </div>
      <div className={`container ${styles.container2}`}>
        <div className={styles.content}>
          <Text type="h3" up>
            приглашаем <br />
            к сотрудничеству <br />
            дилеров!
          </Text>
          <div className={styles.info}>
            <Text>
              ул. Большая <br /> Конюшенная, д. 19/8
            </Text>
            <Text>Санкт-Петербург</Text>
          </div>
        </div>
      </div>
    </div>
  );
};
