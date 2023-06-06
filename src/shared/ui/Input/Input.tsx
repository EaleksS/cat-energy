import { Dispatch, FC } from "react";
import styles from "./Input.module.scss";
import InputMask from "react-input-mask";
import { Text } from "../..";

interface Props {
  type?: "email" | "text" | "tel" | "textarea" | "search";
  placholder?: string;
  error?: boolean;
  value: string;
  setValue: Dispatch<React.SetStateAction<string>>;
  h?: string;
}

export const Input: FC<Props> = ({
  type = "text",
  error = false,
  placholder,
  value,
  setValue,
  h = "50px",
}): JSX.Element => {
  switch (type) {
    case "email":
      return (
        <label className={styles.label} style={{ height: h }}>
          <Text type="h3" up>
            E-mail:*
          </Text>

          <input
            type="email"
            placeholder={placholder ? placholder : "E-mail"}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className={error ? styles.error : ""}
          />
        </label>
      );

    case "tel":
      return (
        <label className={styles.label} style={{ height: h }}>
          <Text type="h3" up>
            Телефон:*
          </Text>

          <InputMask
            mask="+7 (999) 999-99-99"
            name="message"
            placeholder={placholder ? placholder : "Телефон"}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className={error ? styles.error : ""}
          ></InputMask>
        </label>
      );

    case "textarea":
      return (
        <label className={styles.label} style={{ height: h }}>
          <textarea
            placeholder={
              placholder ? placholder : "Расскажите обо всех повадках кота"
            }
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </label>
      );

    case "search":
      return (
        <label className={styles.label} style={{ height: h }}>
          <Text type="h3" up>
            {placholder ? placholder : "ПОИСК:"}
          </Text>

          <input
            placeholder={placholder ? placholder : "ПОИСК"}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </label>
      );

    default:
      return (
        <label className={`${styles.label}`} style={{ height: h }}>
          <Text type="h3" up>
            {placholder ? placholder : "ИМЯ:*"}
          </Text>

          <input
            type="text"
            placeholder={placholder ? placholder : "ИМЯ"}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className={error ? styles.error : ""}
          />
        </label>
      );
  }
};
