import Image from "next/image";
import { View } from "../../types/types";
import IranFalg from "./Faravahar.svg";
import styles from "./Header.module.css";
import { RWebShare } from "react-web-share";

const Header = ({ views }: { views: View }) => {
  return (
    <div className={styles.container}>
      <div className={styles.view}>
        <i className="fa-solid fa-eye"></i>
        <p className={styles.quantity}>{views?.quantity}</p>
      </div>
      <div className={styles.logo}>
        <Image
          alt={"Women-Life-Freedom"}
          src={IranFalg}
          style={{ width: "300px", height: "150px" }}
          priority
        ></Image>
      </div>
      <RWebShare
        data={{
          text: "Be the voice of the Iranian people, \n Please Share it as much as you can! \n",
          url: "https://patrioticiranians.info",
          title: "Patriotic Iranians",
        }}
        onClick={() => console.log("shared successfully!")}
      >
        <div className={styles.view_container}>
          <p>Be the voice of the Iranian people</p>
          <i className={`fa-solid fa-share fa-m ${styles.share}`}></i>
        </div>
      </RWebShare>
    </div>
  );
};

export default Header;
