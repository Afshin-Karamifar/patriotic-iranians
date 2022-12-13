import { useState } from "react";
import styles from "./Views.module.css";

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
          className={`fa-solid ${showQuote
              ? `fa-angle-down ${styles.arrow_Icon_rotating}`
              : `fa-angle-down ${styles.arrow_Icon_flashing}`
            } fa-lg`}
        ></i>
      </div>
      {showQuote && (
        <div className={`${styles.quote}`}>
          <strong>TO BEGIN WITH:</strong>
          <p className={styles.section_one}>
            <strong className={styles.wants_title}>
              The following information is the truth that Iranians believe after
              spending almost 43 years in the prison of the Islamic Republic of
              Iran.
            </strong>
          </p>
          <p className={styles.section_one}>
            <strong>
              THE ISLAMIC REPUBLIC OF IRAN{" "}
              <strong className={styles.is_not}>IS NOT</strong>{" "}
              <strong className={styles.iran}>IRAN</strong>
            </strong>
          </p>
          <p className={styles.section_second}>
            <strong className={styles.terrorist}>
              The Islamic Republic of Iran is a terrorist organization,
            </strong>
            The founder of this organisation was
            <strong>Ruhollah Khomeini</strong>, Someone who has been sent by
            countries that are now known as great, powerful, rich countries, and
            these countries are also known as human rights defenders(
            <strong>Sender of Mullahs</strong>)
          </p>
          <p className={styles.section_three}>
            <strong className={styles.terrorist}>
              What this terrorist organisation actually did?
            </strong>
            They staged a coup against
            the King of Iran, Mohammad Reza Pahlavi. (someone who was a true
            patriot) in 1979. Mohammad Reza Pahlavi Just like the great Cyrus,
            he also had a plan to bring peace to the area.The King of Iran
            wanted dignity and respect for his people, and He worked hard to put
            into action the human rights defined by Great Cyrus. But this was a
            disaster for the <strong>Sender of Mullahs</strong>. After that
            coup, the IRI owned everything (money, oil, etc.) in Iran. In front
            of peoples eyes and the media, IRI plays the role of an Islamic
            organization. However, IRI acted according to the plan that the{" "}
            <strong>Sender of Mullahs</strong> had for Asian countries. IRI
            organised and sent many groups of terrorists to countries in Asia,
            such as Lebanon, Iraq, Syria, and Yemen. The IRI looted all the
            wealth of Iran and gave it to all those terrorist groups.
            <br />
            The plan was to keep Iran from becoming a great and powerful country
            by oppressing and impoverishing Iranians, as well as to intimidate
            other Asian countries with IRI. They can then sell their weapons and
            military equipment to countries that fear IRI. They can also be
            shown as good countries in front of the media by acting as humans
            rights defenders and accepting asylum seekers from countries that
            are at war because of IRI terrorist groups.
          </p>

          <p className={styles.section_four}>
            <strong className={styles.iranian}>
              What do the Iranian people want?
            </strong>
            Kick IRI out of their country, bring peace to Iran and Asian
            countries, and put into action the real human rights defined by
            Great Cyrus.
          </p>
          <p>
            <strong className={styles.what_is}>
              {" "}
              What is going on in Iran?
            </strong>
            After almost 43 years of IRI presence in Iran, the Iranian people
            are really tired of the IRI. They lost everything: freedom, money,
            their history, and also their lives. latest Protests in Iran were
            sparked by the death of a 22-year-old Kurdish woman, Mahsa Amini,
            known by her Kurdish name, Jina, who was arrested and violently
            beaten by the country’s morality police. Amini died on September 16,
            resulting in national outrage and mobilising a women-led movement
            that has garnered international support. Protesters are calling for
            the end of oppressive laws and the dissolution of the country’s
            Islamic government. Currently, Iranians of all ages, ethnicities,
            and genders have joined in the demonstrations, but it is mainly the
            younger generations that have taken to the streets. Women and men
            are shoulder-to-shoulder. All of Iran is united, and for the first
            time in the history of Iran since the Islamic Revolution, there is
            this unique unity between the ethnicities. Everyone is chanting the
            same slogan. Their demand is the same. According to human rights
            Activists in Iran (HRA): more than 475 people have been killed by
            security forces while participating in anti-government protests,
            and over 18,000 have been detained by authorities.
          </p>
        </div>
      )}
    </div>
  );
};

export default Views;
