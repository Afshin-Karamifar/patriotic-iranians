import { useState } from "react";
import styles from "./Views.module.css";
import "animate.css";

const Views = () => {
  const [showQuote, setShowQuote] = useState(false);
  return (
    <div>
      <div
        className={styles.container}
        onClick={() => setShowQuote((prevState) => !prevState)}
      >
        <p className={styles.title}>See what is going on in iran . . .</p>
        <i
          className={`fa-solid ${
            showQuote
              ? `fa-angle-down ${styles.arrow_Icon_rotating}`
              : `fa-angle-down ${styles.arrow_Icon_flashing}`
          } fa-lg`}
        ></i>
      </div>
      {showQuote && (
        <div className={`${styles.quote} animate__animated animate__fadeIn`}>
          <p>
            Protests in Iran were sparked by the death of a 22-year-old Kurdish
            woman, Mahsa Amini, known by her Kurdish name, Jina, who was
            arrested and violently beaten by the country’s morality
            police. Amini died on September 16, resulting in
            national outrage and mobilising a women-led movement that has
            garnered international support. Protesters are calling for the end
            of oppressive laws and the dissolution of the country’s Islamic
            government. Currently, Iranians of all ages, ethnicities, and
            genders have joined in the demonstrations, but it is mainly the
            younger generations that have taken to the streets. Women and men
            are shoulder-to-shoulder. All of Iran is united, and for the first
            time in the history of Iran since the Islamic Revolution, there is
            this unique unity between the ethnicities. Everyone is chanting the
            same slogan. Their demand is the same. According to Human Rights
            Activists in Iran (HRA), more than 475 people have been killed by
            security forces while participating in anti-government protests,
            and over 18,000 have been detained by authorities.
          </p>
        </div>
      )}
    </div>
  );
};

export default Views;
