import Menu from "./Menu";
import Views from "./Views";
import Cyrus from "./Cyrus";
import Head from "next/head";
import "animate.css";
import path from "path";
import fs from "fs-extra";
import Filter from "./Filter";
import Header from "./Header";
import Script from "next/script";
import { useEffect } from "react";
import { Martyr } from "../types/types";
import styles from "../styles/Home.module.css";
import { useFilteredContext, useMartyrContext } from "../context/MartyrContext";

export async function getServerSideProps() {
  const viewPath = path.join(__dirname, "/tmp/", "view.json");
  const views: { quantity: number } = await fs.readJson(viewPath);
  await fs.writeJson(viewPath, { quantity: views.quantity + 1 });

  const martyrsPath = path.join("data", "martyrs.json");
  const martyrs: { quantity: number } = await fs.readJson(martyrsPath);
  // const [viewData, martyrData] = await Promise.all([
  //   fetch(`${process.env.VIEW_API}`),
  //   fetch(`${process.env.SEARCH_API}`),
  // ]);

  // const views = await viewData.json();
  // const martyrs = await martyrData.json();

  
  return {
    props: { views: views.quantity + 1, martyrs },
  };
}
const Document = ({ views, martyrs }: { views: number; martyrs: Martyr[] }) => {
  const martyrsContext = useMartyrContext();
  const filterMartyrContext = useFilteredContext();

  useEffect(() => {
    martyrsContext.fillOutMartyrs(martyrs);
    filterMartyrContext.fillOutFilteredMartyrs(martyrs);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    martyrs.length > 0 && (
      <div className={`${styles.container} animate__animated animate__fadeIn`}>
        <Head>
          <title>Patriotic Iranians</title>
          <meta name="description" content="Generated by create next app" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1"
          />
          <link rel="icon" href="/Faravahar.svg" />
        </Head>
        <Header views={views} />
        <Cyrus />
        <Views />
        <Menu />
        <Filter martyrs={martyrsContext.Martyrs} />
        <Script src="https://kit.fontawesome.com/de64505208.js"></Script>
      </div>
    )
  );
};

export default Document;
