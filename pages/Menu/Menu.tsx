import styles from "./Menu.module.css";

const Menu = () => {
  return (
    <div>
      <div className={styles.container}>
        <p className={styles.report_title}>
          Iranian Human Rights Organization Report
        </p>
        <p className={styles.report}>
          The total number of Martyrs:{" "}
          <strong>{(482).toLocaleString("en-IN")}</strong>
        </p>
        <p className={styles.report}>
          The number of Children:{" "}
          <strong>{(60).toLocaleString("en-IN")}</strong>
        </p>
        <p className={styles.report}>
          The number of executed: <strong>{(1).toLocaleString("en-IN")}</strong>
        </p>
        <p className={styles.report}>
          The total number of detainees:{" "}
          <strong>{(18242).toLocaleString("en-IN")}</strong>
        </p>
        <p className={styles.report}>
          The number of detainees that IRI wants to execute:{" "}
          <strong>{(37).toLocaleString("en-IN")}</strong>
        </p>
      </div>
      <div className={styles.container}>
        <p className={styles.note}>
          The actual number of martyrs is higher, as it includes children and
          executed martyrs. We just started and are working so hard to upload
          the martyrs data.&nbsp;&nbsp;
          <br />
          <a href="mailto:iran@patrioticiranians.info">
            <span className={styles.contact_me}>Contact us </span>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Menu;
