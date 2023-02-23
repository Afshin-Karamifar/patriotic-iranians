import Image from "next/image";
import { View } from "../../types/types";
import IranFalg from "./Faravahar.svg";
import QR_Code from "./QR_Code.svg";
import styles from "./Header.module.css";
import { RWebShare } from "react-web-share";
import "animate.css";
import { useState } from "react";

const Header = ({ views }: { views: View }) => {
  const [showQRCode, setShowQRCode] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.view_container_01}>
        <div
          className={styles.qr_icon_container}
          onClick={() => {
            document.body.style.overflow = "hidden";
            setShowQRCode((prevState) => !prevState);
          }}
        >
          <i className={`fa-solid fa-qrcode fa-xl ${styles.qr}`}></i>
        </div>
        <div className={styles.view}>
          <i className={`fa-solid fa-eye ${styles.eye}`}></i>
          <p className={styles.quantity}>
            {views?.quantity / 1000 > 1
              ? Math.floor(Number(views?.quantity) / 1000) + "K"
              : views?.quantity}
          </p>
        </div>
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
          text: "The Islamic Republic of Iran is killing and executing people in Iran. \nBe the voice of the Iranian people. \nPlease share it as much as you can!",
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
      {showQRCode && (
        <div
          className={`animate__animated animate__fadeIn ${styles.qr_code}`}
          onClick={() => {
            document.body.style.overflow = "auto";
            setShowQRCode((prevState) => !prevState);
          }}
        >
          <div>
            <Image
              alt={"Women-Life-Freedom"}
              src={QR_Code}
              style={{ width: "300px", height: "300px" }}
              className={styles.qr_code_main}
              priority
            ></Image>
            <p className={styles.tt_close}>Tap to close.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
