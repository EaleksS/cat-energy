import { FC } from "react";
import styles from "./HowItWorks.module.scss";
import { Work } from "../../../entities";

const data = [
  {
    id: 1,
    url: "/img/icon/icon_leaf.svg",
    desc: "Функциональное питание содержит только полезные питательные вещества.",
  },
  {
    id: 2,
    url: "/img/icon/icon_tub.svg",
    desc: "Выпускается в виде порошка, который нужно лишь залить кипятком и готово.",
  },
  {
    id: 3,
    url: "/img/icon/icon_eat.svg",
    desc: "Замените один-два приема обычной еды на наше функциональное питание.",
  },
  {
    id: 4,
    url: "/img/icon/icon_alarm.svg",
    desc: "Уже через месяц наслаждайтесь изменениями к лучшему вашего питомца!",
  },
];

export const HowItWorks: FC = (): JSX.Element => {
  return (
    <div className={`container ${styles.how_it_works}`}>
      {data.map((e) => (
        <Work key={e.id} index={e.id} url={e.url} desc={e.desc} />
      ))}
    </div>
  );
};
