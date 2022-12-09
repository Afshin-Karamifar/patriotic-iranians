import Image from "next/image";
import { Martyr } from "../../types/types";
import Flower from "./Rose_flower.svg";
import styles from "./Martyrs.module.css";
const _ = require("lodash");

const Martyrs = ({ martyrs }: { martyrs: Martyr[] }) => {
  return (
    <div className={styles.container}>
      {martyrs?.length > 0 ? (
        _.sortBy(martyrs, "firstName").map((martyr: Martyr, index: number) => {
          return (
            <div className={styles.card} key={index}>
              <div
                className={`${styles.cardImage} animate__animated animate__fadeIn`}
              >
                <Image
                  src={Flower}
                  alt={"Martyr"}
                  width={120}
                  height={120}
                  className={styles.heart}
                />
                <Image
                  src={`http://drive.google.com/uc?export=view&id=${martyr.image}`}
                  alt={"Martyr"}
                  width={300}
                  height={300}
                  className={styles.martyrImage}
                />
              </div>
              <p className={styles.full_name}>
                {martyr.firstName.toUpperCase()} {martyr.lastName.toUpperCase()}
              </p>
              <p className={styles.age}>{martyr.age} years old</p>
              <p className={styles.gender}>{martyr.gender}</p>
              <p className={styles.city}>Iran - {martyr.city}</p>
              <i className="fa-solid fa-flower"></i>
            </div>
          );
        })
      ) : (
        <p className={styles.no_found}>Nothing Found...!</p>
      )}
    </div>
  );
};

export default Martyrs;
