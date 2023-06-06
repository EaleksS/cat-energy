import { FC } from "react";
import { CatalogLinks, HowItWorks, Layout, Preview } from "../../widgets";

// import styles from "./Main.module.scss";

export const Main: FC = (): JSX.Element => {
  return (
    <Layout nav="white">
      <Preview />
      <CatalogLinks />
      <HowItWorks />
    
    </Layout>
  );
};
