import styles from "./Menu.module.css";

const Menu = () => {
  return (
    <div>
      <div className={styles.container}>
        <p className={styles.note}>
          {`The actual number of martyrs is higher, as it includes children and
          executed martyrs. We have just started and are doing our best to upload
          the martyrs' data.`}&nbsp;&nbsp;
          <br />
          <a href="mailto:afshin.karamifar@gmail.com">
            <span className={styles.contact_me}>Contact us </span>
          </a>
        </p>
      </div>
      <div className={styles.container}>
        <p className={styles.report_title}>
          Iranian Protest - Daily Update - <span className={styles.year}>2022</span>
        </p>
        <p className={styles.report_title_date}>
          From September until Now
        </p>
        <p className={styles.report}>
          Number of Martyrs: <strong>{(525).toLocaleString("en-IN")}</strong>
        </p>
        <p className={styles.report}>
          Number of Children Murdered: <strong>{(71).toLocaleString("en-IN")}</strong>
        </p>
        <p className={styles.report}>
          Number of Children Arrested(under 18): <strong>{(168).toLocaleString("en-IN")}</strong>
        </p>
        <p className={styles.report}>
          Number of Executed: <strong>{(4).toLocaleString("en-IN")}</strong>
        </p>
        <p className={styles.report}>
          Number of Protests: <strong>{(1260).toLocaleString("en-IN")}</strong>
        </p>
        <p className={styles.report}>
          Number of Cities Involved: <strong>{(164).toLocaleString("en-IN")}</strong>
        </p>
        <p className={styles.report}>
          Number of Universities Involved: <strong>{(144).toLocaleString("en-IN")}</strong>
        </p>
        <p className={styles.report}>
          Number of detainees:{" "}
          <strong>{(19546).toLocaleString("en-IN")}</strong>
        </p>
        <p className={styles.report}>
          Number of detainees students:{" "}
          <strong>{(713).toLocaleString("en-IN")}</strong>
        </p>
        <p className={styles.report}>
          Number of detainees Identified:{" "}
          <strong>{(5022).toLocaleString("en-IN")}</strong>
        </p>
        <p className={styles.report}>
          Number of detainees that IRI wants to execute:{" "}
          <strong>{(110).toLocaleString("en-IN")}</strong>
        </p>
      </div>
    </div>
  );
};

export default Menu;
