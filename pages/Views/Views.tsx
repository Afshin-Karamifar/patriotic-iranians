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
        <p className={styles.title}>See what is going on in Iran . . .</p>
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
          <p className={styles.section_one_second}>
            THE ISLAMIC REPUBLIC OF IRAN{" "}
            <strong className={styles.is_not}>IS NOT REPRESENTING </strong>{" "}
            <strong className={styles.iran}>IRAN</strong>
          </p>
          <p>
            <strong className={styles.what_is}>
              {" "}
              What is going on in Iran?
            </strong>
            {`

            The executions of political and civil figures, the lack of freedom of expression, the ignoring womens rights, the economic crisis, the destruction of natural resources, the looting of the country's national resources, and spending them in other countries to support terrorists have enraged the Iranian people more and more over the past four decades.

            Finally, in September 2022, with the death of a girl named Mahsa (Zhina) Amini, 22 years old, by the morality police for wearing a headscarf deemed inappropriate, this pent-up fury erupted and spread across the country. The demonstrator chanted "women, life, freedom," and "death to the dictator." A popular peaceful revolt is calling for an end to the decades-long authoritarian rule of the country’s top clerics.
            But the police dealt with the protesters brutally and killed hundreds of people, primarily young people, including many children. The regime has cut off internet access in many areas, especially Kurdish cities. Despite this, many videos and photos of the regime's brutal repression have gone viral on social networks.

            Currently, in Iran, the police are attacking hospitals to arrest people who have been shot and wounded to force them to confess through torture. Admit that they are rioters and have been encouraged to do so by foreign countries; otherwise, they will be executed.

            In many cases, police refuse to release the bodies of those killed to their families. In return, they extort vast sums of money from bereaved families, preventing them from holding a proper burial.

            According to Human Rights Activists in Iran (HRA), during these three months, more than 490 people have been killed by the security forces while participating in anti-government demonstrations, and more than 18,000 people have been arrested by the authorities, who are added to the list of executioners every day.`}
          </p>
          <p className={styles.section_four}>
            <strong className={styles.iranian}>
              What do the Iranian people want?
            </strong>
            Kick IRI out of their country, bring peace to Iran and Asian
            countries, and put into action the real human rights defined by
            Great Cyrus.
          </p>
          <p className={styles.section_one}>
            <strong className={styles.wants_title}>
              THE FOLLOWING INFORMATION IS WHAT IRANIAN PEOPLE BELIEVE AFTER
              SPENDING ALMOST 43 YEARS LIVING IN THE PRISON-LIKE COUNTRY OF THE
              ISLAMIC REPUBLIC OF IRAN.
            </strong>
          </p>
          <p className={styles.section_second}>
            <strong className={styles.terrorist}>
              THE ISLAMIC REPUBLIC OF IRAN IS A TERRORIST ORGANIZATION THAT ARE GOVERNING THE
              COUNTRY OF IRAN FOR EVIL PURPOSES.
            </strong>
            This organisation was founded by <strong>Ruhollah Khomeini</strong>,
            someone who was sent by countries that are known as great, powerful,
            rich, and known as human rights defenders.
          </p>
          <p className={styles.section_three}>
            <strong className={styles.terrorist}>
              What this terrorist organisation actually did?
            </strong>
            They staged a coup against the King of Iran, Mohammad Reza Pahlavi
            in 1979. Mohammad Reza Pahlavi likewise the Great Cyrus, had the
            plan to bring peace to the area. The King of Iran wanted dignity and
            respect for his people, and he worked hard to put into action the
            human rights defined by Great Cyrus, but at the same time, this plan
            was a threat to the sender of Mullahs. After that coup, the IRI took
            over all the natural resources of Iran including oil, natural gas,
            gold, coal, chromium, copper, iron ore, lead, manganese, zinc,
            sulphur and so on.
            <br />
            {`Despite their evil plan, they play a hypocritical role and play the role of an Islamic organization. However, IRI acts according to the plan that Mullah's sender has for Asian countries. IRI organised and sent many groups of terrorists to the neighbour countries such as Lebanon, Iraq, Syria, and Yemen. The IRI looted all the wealth of Iran and gave it to all those terrorist groups, and they are founded by the IRI.`}
            <br />
            <br />
            <strong>In simple words,</strong>{" "}
            {`the plan was to keep Iran from becoming a great and powerful country by oppressing and impoverishing Iranians, as well as intimidating other Asian countries with IRI. They can then sell their weapons and military equipment to countries that fear IRI and buy Iran's natural resources at the cheapest price. They can also be shown as good countries in front of the media by acting as human rights defenders and accepting asylum seekers from countries that are at war because of IRI terrorist groups.`}
          </p>
        </div>
      )}
    </div>
  );
};

export default Views;
