import styles from "./Menu.module.css";

const Menu = () => {
  return (
    <div>
      <div className={styles.container}>
        <p className={styles.report_title}>
          Iranian Human Rights Organization Report
        </p>
        <p className={styles.report}>
          The total number of Martyrs: <strong>450</strong>
        </p>
        <p className={styles.report}>
          The number of Children: <strong>60</strong>
        </p>
        <p className={styles.report}>
          The number of executed: <strong>01</strong>
        </p>
        <p className={styles.report}>
          The total number of detainees: <strong>18000</strong>
        </p>
      </div>
      <div className={styles.container}>
        <p className={styles.note}>
          The actual number of martyrs is higher, as it includes children and
          executed martyrs. We just started and are working so hard to upload
          the martyrs data.
        </p>
      </div>
    </div>
  );
};

export default Menu;
