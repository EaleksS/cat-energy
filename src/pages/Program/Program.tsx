import { FC, useState } from "react";
import styles from "./Program.module.scss";
import { Layout } from "../../widgets";
import { Button, Input, Text } from "../../shared";

export const Program: FC = (): JSX.Element => {
  const [valueName, setValueName] = useState<string>("");
  const [valueWeight, setValueWeight] = useState<string>("");
  const [valueYear, setValueYear] = useState<string>("");

  const [valueEmail, setValueEmail] = useState<string>("");
  const [valueTel, setValueTel] = useState<string>("");

  const [valueComments, setValueComments] = useState<string>("");

  const [radioBtn, setRadioBtn] = useState<number>(1);

  return (
    <Layout>
      <div className="container">
        <Text type="h1" mt="40px">
          Подбор программы
        </Text>
        <Text type="h3" up mt="56px">
          Заполните анкету, и мы подберем <br />
          программу питания для вашего кота
        </Text>
      </div>
      <form onSubmit={(e) => e.preventDefault()} className={styles.form}>
        <div className={`container ${styles.questionnaires}`}>
          <div className={styles.inputs}>
            <Input
              type="text"
              placholder="ИМЯ:*"
              value={valueName}
              setValue={setValueName}
            />
            <Input
              type="text"
              placholder="Вес (кг):*"
              value={valueWeight}
              setValue={setValueWeight}
            />
            <Input
              type="text"
              placholder="Возраст (лет):"
              value={valueYear}
              setValue={setValueYear}
            />
          </div>
          <div className={styles.infos}>
            <label>
              <input
                type="radio"
                checked={radioBtn === 1 ? true : false}
                onChange={() => setRadioBtn(1)}
              />
              <Text type="h3" up>
                похудение
              </Text>
            </label>

            <label>
              <input
                type="radio"
                checked={radioBtn === 2 ? true : false}
                onChange={() => setRadioBtn(2)}
              />
              <Text type="h3" up>
                Набор массы
              </Text>
            </label>

            <label>
              <input
                type="radio"
                checked={radioBtn === 3 ? true : false}
                onChange={() => setRadioBtn(3)}
              />
              <Text type="h3" up>
                Не знаю (Нужен ваш совет)
              </Text>
            </label>
          </div>
        </div>
        <div className={styles.contacts}>
          <div className={`container`}>
            <Text type="h2">Контактные данные (владельца кота)</Text>
            <div className={styles.inputs}>
              <Input type="email" value={valueEmail} setValue={setValueEmail} />
              <Input type="tel" value={valueTel} setValue={setValueTel} />
            </div>
          </div>
        </div>
        <div className={styles.comments}>
          <div className={`container`}>
            <Text type="h2">Комментарий</Text>
            <div className={styles.inputs}>
              <Input
                type="textarea"
                value={valueComments}
                setValue={setValueComments}
                h="174px"
              />
            </div>
          </div>
        </div>
        <div className={styles.additionally}>
          <div className={`container`}>
            <Text type="h2">Дополнительно</Text>
            <div className={styles.inputs}>
              <label>
                <input type="checkbox" />
                <Text type="h3" up>
                  сахарозаменитель
                </Text>
              </label>
              <label>
                <input type="checkbox" />
                <Text type="h3" up>
                  питьевая вода
                </Text>
              </label>
              <label>
                <input type="checkbox" />
                <Text type="h3" up>
                  молоко
                </Text>
              </label>
              <label>
                <input type="checkbox" />
                <Text type="h3" up>
                  витамины
                </Text>
              </label>
            </div>
          </div>
        </div>
        <div className={`container ${styles.sends}`}>
          <Button type="primary">отправить заявку</Button>
          <Text>* — Обязательные поля</Text>
        </div>
      </form>
    </Layout>
  );
};
