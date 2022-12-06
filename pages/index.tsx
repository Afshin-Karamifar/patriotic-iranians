import Menu from "./Menu";
import Views from "./Views";
import Cyrus from "./Cyrus";
import Head from "next/head";
import Header from "./Header";
import { View, Martyr } from "../types/types";
import Script from "next/script";
import styles from "../styles/Home.module.css";
import { useFilteredContext, useMartyrContext } from "../context/MartyrContext";
import Filter from "./Filter";
import { useEffect } from "react";

export async function getServerSideProps() {
  const [viewData, martyrData] = await Promise.all([
    fetch("http:localhost:3000/api/view"),
    fetch("http:localhost:3000/api/martyr/search"),
  ]);

  const views = await viewData.json();
  const martyrs = await martyrData.json();

  return {
    props: { views, martyrs },
  };
}
const Home = ({ views, martyrs }: { views: View; martyrs: Martyr[] }) => {
  const martyrsContext = useMartyrContext();
  const filterMartyrContext = useFilteredContext();

  useEffect(() => {
    martyrsContext.fillOutMartyrs(martyrs);
    filterMartyrContext.fillOutFilteredMartyrs(martyrs);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.container}>
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
      <Views />
      <Cyrus />
      <Menu />
      <Filter martyrs={martyrsContext.Martyrs} />
      <Script src="https://kit.fontawesome.com/de64505208.js"></Script>
    </div>
  );
};

export default Home;
