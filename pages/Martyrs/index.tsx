import Image from "next/image";
import { Martyr } from "../types";
import Flower from "./Rose_Flower.svg";
import Dell from "./dell.jpg";
import styles from "./Martyrs.module.css";

const Martyrs = ({ martyrs }: { martyrs: Martyr[] }) => {
  return (
    <div className={styles.container}>
      {martyrs.length > 0 ? (
        martyrs.map((martyr: Martyr, index: number) => {
          return (
            <div className={styles.card} key={index}>
              <div className={styles.cardImage}>
                <Image
                  src={Flower}
                  alt={"Martyr"}
                  width={100}
                  height={100}
                  className={styles.heart}
                />
                <Image
                  src={Dell}
                  alt={"Martyr"}
                  width={320}
                  height={280}
                  className={styles.martyrImage}
                />
              </div>
              <p>First name: {martyr.firstName}</p>
              <p>Last name: {martyr.lastName}</p>
              <p>Age: {martyr.age}</p>
              <p>Gender: {martyr.gender}</p>
              <p>City: {martyr.city}</p>
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
