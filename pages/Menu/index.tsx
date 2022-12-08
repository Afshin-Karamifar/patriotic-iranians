import styles from "./Menu.module.css";

const Menu = () => {
  return (
    <div className={styles.container}>
      <p className={styles.report_title}>
        Iranian Human Rights Organization Report
      </p>
      <p className={styles.report}>
        The number of Martyrs : <strong>448</strong>
      </p>
      <p className={styles.report}>
        The number of Children : <strong>60</strong>
      </p>
      <p className={styles.report}>
        The number of detainees : <strong>18000</strong>
      </p>
    </div>
  );
};

export default Menu;
