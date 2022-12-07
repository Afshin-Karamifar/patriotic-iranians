import styles from "./Views.module.css";
import { RWebShare } from "react-web-share";

const Views = () => {
  return (
    <div>
      <RWebShare
        data={{
          text: "Be the voice of the Iranian people, Please Share it as much as you can! \n",
          url: "https://patrioticiranians.info",
          title: "Patriotic Iranians",
        }}
        onClick={() => console.log("shared successfully!")}
      >
        <div className={styles.container}>
          <p>Be the voice of the Iranian people . . .</p>
          <i className="fa-solid fa-share fa-m share"></i>
        </div>
      </RWebShare>
    </div>
  );
};

export default Views;
