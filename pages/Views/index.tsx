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
          <strong>TO BEGIN WITH:</strong>
          <br />
          <strong>
            THE ISLAMIC REPUBLIC OF IRAN{" "}
            <strong className={styles.is_not}>IS NOT</strong>{" "}
            <strong className={styles.iran}>IRAN</strong>
          </strong>
          <br />
          <br />
          <strong className={styles.terrorist}>
            The Islamic Republic of Iran is a terrorist organization.
          </strong>
          <p>
            The founder of this organisation is 
            <strong>Ruhollah Khomeini</strong>
            <br />
            Someone who has been sent by countries that are now known as great,
            powerful, rich countries, and these countries are also known as
            human rights defenders(such a disgrace)
          </p>
          <strong>What this terrorist organisation actually did? </strong>
          <br />
          <br />
          They staged a coup against Irans King, Mohammad Reza Pahlavi (someone
          who was a true patriot) in 1979.Just like the great Cyrus, he also had
          a plan to bring peace to the area.The King of Iran wanted dignity and
          respect for his people, and he worked hard to implement the human
          rights defined by Great Cyrus 2580 years ago.But this was horrible for
          those countries (the senders of Ruhollah Khomeini) that I mentioned
          earlier.After that coup, IRI owned everything (money, oil, etc.) in
          Iran.After that coup, the IRI owned everything (money, oil, etc.) in
          Iran. in front of peoples eyes and the media IRI plays the role of an
          Islamic organisation that fights against those countries (the senders
          of Ruhollah Khomeini) that I mentioned earlier, but IRI followed
          exactly the plan that those countries (the senders of Ruhollah
          Khomeini) have for Asian countries. IRI organised and sent many groups
          of terrorists to most countries in Asia, such as Lebanon, Iraq, Syria,
          and Yemen. The IRI looted all the wealth of Iran and gave it to all
          those terrorist groups.
          <br />
          <strong>
            The plan of those countries (the senders of Ruhollah Khomeini) was
            to keep Iran from becoming a great and powerful country (by
            oppressing and impoverishing Iranians), as well as to scare other
            Asian countries with IRI.They can then sell their weapons and
            military equipment to countries that fear IRI. Also, those countries
            (the senders of Ruhollah Khomeini, co-founder of IRI) can be shown
            as good countries in front of the media by acting as human rights
            defenders and accepting asylum seekers from countries that are at
            war because of IRIs terrorist groups.
          </strong>
          <br />
          <br />
          <strong className={styles.iranian}>
            {" "}
            What do the <strong className={styles.iran}>
              Iranian people
            </strong>{" "}
            want?
            <br />
            <br />
            kick IRI out of their country, bring peace to Iran and Asian
            countries, and put into action the human rights defined by Great
            Cyrus 2580 years ago. not the human rights that big countries are
            showing in front of the media.
          </strong>
          <br />
          <br />
          <strong className={styles.what_is}> What is going on in Iran?</strong>
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
