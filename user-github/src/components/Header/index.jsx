import githubLogo from "../../assets/github-icon.png";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <div className={styles.Header}>
      <img className={styles.HeaderImg} src={githubLogo} alt="Github Logo" />
      <h1 className={styles.HeaderTitle}>GitHub Explorer</h1>
    </div>
  );
};

export default Header;
