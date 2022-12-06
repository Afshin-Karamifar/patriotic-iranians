import Image from "next/image";
import { View } from "../../types/types";
import IranFalg from "./Faravahar.svg";
import styles from "./Header.module.css";

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
          style={{ width: "250px", height: "130px" }}
          priority
        ></Image>
      </div>
    </div>
  );
};

export default Header;
