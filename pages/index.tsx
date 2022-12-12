import Menu from "./Menu/Menu";
import Views from "./Views/Views";
import Cyrus from "./Cyrus/Cyrus";
import Head from "next/head";
import Error from "next/error";
import "animate.css";
import path from "path";
import fs from "fs-extra";
import Filter from "./Filter/Filter";
import Header from "./Header/Header";
import Script from "next/script";
import { useEffect } from "react";
import { View, Martyr } from "../types/types";
import styles from "../styles/Home.module.css";
import { useFilteredContext, useMartyrContext } from "../context/MartyrContext";

export async function getServerSideProps() {
  const martyrsPath = path.join(process.cwd(), "data", "martyrs.json");
  let martyrs: Martyr[];
  let views: View;

  try {
    views = await fetch(`${process.env.VIEW_API}`).then((response) =>
      response.json()
    );
  } catch (error) {
    console.log(error);
    views = {
      id: "",
      quantity: -1,
    };
  }

  try {
    martyrs = await fs.readJson(martyrsPath);
  } catch (error) {
    console.log(error);
    martyrs = [];
  }

  return {
    props: { views, martyrs },
  };
}
const Document = ({ views, martyrs }: { views: View; martyrs: Martyr[] }) => {
  const martyrsContext = useMartyrContext();
  const filterMartyrContext = useFilteredContext();

  if (views.quantity === -1) <Error statusCode={503} />;
  if (martyrs.length === 0) <Error statusCode={503} />;

  useEffect(() => {
    martyrsContext.fillOutMartyrs(martyrs);
    filterMartyrContext.fillOutFilteredMartyrs(martyrs);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={`${styles.container} animate__animated animate__fadeIn`}>
      <Head>
        <title>Patriotic Iranians</title>
        <meta name="description" content="What is going on in Iran?" />
        <meta
          name="keywords"
          content="iran, mahsa amini, iran protest, IRI, hijab, protest, execution, what is going on in iran"
        />
        <meta name="author" content="A Patriotic Iranian" />
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
  );
};

export default Document;
