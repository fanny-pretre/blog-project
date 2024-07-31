import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>The Seasonal Girl</div>
      <div className={styles.text}>
        The Seasonal Girl © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
