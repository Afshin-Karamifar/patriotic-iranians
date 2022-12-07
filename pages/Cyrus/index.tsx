import { useState } from "react";
import styles from "./Cyrus.module.css";

const Cyrus = () => {
  const [showQuote, setShowQuote] = useState(false);
  return (
    <div>
      <div
        className={styles.container}
        onClick={() => setShowQuote((prevState) => !prevState)}
      >
        <p className={styles.title}>Cyrus, King of Persia, 2580 years ago . . .</p>
        <i
          className={`fa-solid ${
            showQuote ? "fa-angle-down" : "fa-angle-left"
          } fa-lg`}
        ></i>
      </div>
      {showQuote && (
        <div className={styles.quote}>
          <p>
            <i className="fa-solid fa-quote-left"></i>&nbsp; I am Cyrus, King of
            the World, The Great King, The Just King, King of Babylon, King of
            Sumer and Akkad, King of the World. Son of Cambyses, the Great King
            … When I entered Babylon without war and struggle, all the people
            accepted my steps with joy. On the throne of the kings of Babylon, I
            sat. I sat on the throne of Marduk, the Marduk (Babylonian God),
            turned the pure hearts of the people of Babylon to me because I
            honored him. My great army slowly entered Babylon. I did not allow
            the suffering of the people of this city and this land. I abolished
            slavery, ending their misery. … I commanded no one to overthrow the
            inhabitants of the city. I commanded that all people should be free
            to worship their god and that no one would need them. The Great God
            was pleased with my deeds … He blessed us with his kindness. We all
            praised his high position in a joyful and peaceful way … I rebuilt
            all the cities that had been destroyed. I commanded to open all the
            shrines that had been closed. I returned all the people who were
            scattered and displaced to their homeland and built their ruined
            homes so that their hearts would rejoice and that I would be
            long-living in their prayers every day … I provided a peaceful
            community for all people, and I gave peace to all people. I respect
            all the traditions and religions of Babylon, Akkad, and other
            countries under my command. All people in the lands under my command
            are free to choose their religion, work, and place of residence. As
            long as I am alive, no one will be allowed to take over other
            property by force. I am not going to let anyone else do the work
            without getting paid. No one should be punished for a crime
            committed by his relatives. I will stop slavery of men and women,
            and I command my government to do so until this ugly tradition is
            removed from the earth. I will build the ruined cities beyond the
            Tigris and their places of worship so that their inhabitants, who
            were previously brought to Babylon as slaves, may return to their
            homes. &nbsp;
            <i className="fa-solid fa-quote-right"></i>
          </p>
        </div>
      )}
    </div>
  );
};

export default Cyrus;
