import { FC, useState } from "react";
import { Layout, Products, AdditionalItems } from "../../widgets";
import { Input, Text } from "../../shared";
import styles from "./Catalog.module.scss";
import { AiOutlineCloseSquare } from "react-icons/ai";

export const Catalog: FC = (): JSX.Element => {
  const [valueSearch, setValueSearch] = useState<string>("");

  return (
    <Layout>
      <div className={`container ${styles.title}`}>
        <Text type="h1" mt="40px">
          Каталог продукции
        </Text>
        <div className={styles.search}>
          <Input type="search" value={valueSearch} setValue={setValueSearch} />
          <AiOutlineCloseSquare
            className={`${styles.icon} ${valueSearch && styles.active}`}
            onClick={() => setValueSearch("")}
          />
        </div>
      </div>
      <Products />
      <AdditionalItems />
    </Layout>
  );
};
