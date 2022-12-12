import styles from "./Menu.module.css";

const Menu = () => {
  return (
    <div>
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
      <div className={styles.container}>
        <p className={styles.report_title}>
          Iranian Protest 2022 - Daily Update
        </p>
        <p className={styles.report}>
          Number of Martyrs: <strong>{(488).toLocaleString("en-IN")}</strong>
        </p>
        <p className={styles.report}>
          Number of Children: <strong>{(65).toLocaleString("en-IN")}</strong>
        </p>
        <p className={styles.report}>
          Number of executed: <strong>{(2).toLocaleString("en-IN")}</strong>
        </p>
        <p className={styles.report}>
          Number of Protests: <strong>{(1175).toLocaleString("en-IN")}</strong>
        </p>
        <p className={styles.report}>
          Number of detainees:{" "}
          <strong>{(18259).toLocaleString("en-IN")}</strong>
        </p>
        <p className={styles.report}>
          Number of detainees students:{" "}
          <strong>{(625).toLocaleString("en-IN")}</strong>
        </p>
        <p className={styles.report}>
          Number of detainees Identified:{" "}
          <strong>{(3784).toLocaleString("en-IN")}</strong>
        </p>
        <p className={styles.report}>
          Number of detainees that IRI wants to execute:{" "}
          <strong>{(36).toLocaleString("en-IN")}</strong>
        </p>
      </div>
    </div>
  );
};

export default Menu;
