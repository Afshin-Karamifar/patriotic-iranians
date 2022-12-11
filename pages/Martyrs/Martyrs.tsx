import Image from "next/image";
import { Martyr } from "../../types/types";
import Flower from "./Rose_flower.svg";
import Rope from "./Rope.png";
import styles from "./Martyrs.module.css";
import { useEffect, useState } from "react";
const _ = require("lodash");

const Martyrs = ({ martyrs }: { martyrs: Martyr[] }) => {
  const [cardQuantity, setCardQuantity] = useState<number>(10);

  useEffect(() => {
    setCardQuantity(10);
  }, [martyrs]);

  return (
    <>
      <div className={styles.container}>
        {martyrs?.length > 0 ? (
          _.sortBy(martyrs, "firstName")
            .slice(0, cardQuantity - 1)
            .map((martyr: Martyr, index: number) => {
              return (
                <div className={styles.card} key={index}>
                  <div
                    className={`${styles.cardImage} animate__animated animate__fadeIn`}
                  >
                    {martyr.state !== "Execution_List" && (
                      <Image
                        src={Flower}
                        alt={"Martyr"}
                        width={90}
                        height={90}
                        className={styles.heart}
                      />
                    )}
                    <Image
                      src={`http://drive.google.com/uc?export=view&id=${martyr.image}`}
                      alt={"Martyr"}
                      width={300}
                      height={300}
                      className={
                        martyr.state !== "Execution_List"
                          ? styles.martyrImage
                          : styles.martyrImage_No_Heart
                      }
                    />
                  </div>
                  <p className={styles.full_name}>
                    {martyr.firstName.toUpperCase()}{" "}
                    {martyr.lastName.toUpperCase()}
                  </p>
                  <p className={styles.age}>{martyr.age} years old</p>
                  <p className={styles.gender}>{martyr.gender}</p>
                  <p className={styles.city}>Iran - {martyr.city}</p>
                  {martyr.state === "Martyred" && (
                    <p className={styles.city}>
                      Murdered by IRI Morality Police!{" "}
                    </p>
                  )}
                  {martyr.state === "Executed" && (
                    <p className={styles.city}>Executed by IRIs Goverment!</p>
                  )}
                  {martyr.state === "Execution_List" && (
                    <p className={styles.city}>IRI wants to execute me! </p>
                  )}
                  {martyr.state === "Execution_List" && (
                    <p className={styles.be_my_voice}>Please be my voice... </p>
                  )}
                  <i className="fa-solid fa-flower"></i>
                </div>
              );
            })
        ) : (
          <p className={styles.no_found}>Nothing Found...!</p>
        )}
      </div>
      {martyrs?.length > 0 && martyrs?.length > cardQuantity && (
        <p
          className={styles.show_more}
          onClick={() => setCardQuantity((prevState) => prevState + 10)}
        >
          Show{" "}
          {martyrs?.length - cardQuantity >= 10
            ? "10"
            : martyrs?.length - cardQuantity}{" "}
          more
        </p>
      )}
    </>
  );
};

export default Martyrs;
