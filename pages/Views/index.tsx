import { useState } from "react";
import styles from "./Views.module.css";

const Views = () => {
  const [showQuote, setShowQuote] = useState(false);
  return (
    <div
      className={styles.container}
      onClick={() => setShowQuote((prevState) => !prevState)}
    >
      <p>See what is going on in iran . . .</p>
      <i
        className={`fa-solid ${
          showQuote ? "fa-angle-down" : "fa-angle-left"
        } fa-lg`}
      ></i>
    </div>
  );
};

export default Views;
