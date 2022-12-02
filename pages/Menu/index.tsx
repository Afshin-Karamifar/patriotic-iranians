import styles from "./Menu.module.css";

const Menu = () => {
  return (
    <div className={styles.container}>
      <p className={styles.report_title}>Iranian Human Rights Organization Daily Report</p>
      <p className={styles.report}>The number of Martyrs : 448</p>
      <p className={styles.report}>The number of Children : 60</p>
      <p className={styles.report}>The number of detainees : 18000</p>
    </div>
  );
};

export default Menu;
