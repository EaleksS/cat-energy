import { FC } from "react";
import styles from "./CatalogLinks.module.scss";
import { Card } from "../../../entities";

export const CatalogLinks: FC = (): JSX.Element => {
  return (
    <div className={`container ${styles.links}`}>
      <Card
        title="похудение"
        desc="Ваш кот весит больше собаки и почти утратил способность 
        лазить по деревьям? Пора на диету! Cat Energy Slim поможет 
        вашему питомцу сбросить лишний вес."
        url="/img/cat_back.svg"
        to="/catalog"
        link="каталог slim"
      />
      <Card
        title="набор массы"
        desc="Заработать авторитет среди дворовых котов и даже собак?
        Серия Cat Energy Pro поможет вашему коту нарастить 
        необходимые мышцы!"
        url="/img/cat_back2.svg"
        to="/catalog"
        link="каталог pro"
      />
    </div>
  );
};
