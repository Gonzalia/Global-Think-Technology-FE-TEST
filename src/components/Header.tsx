import styles from "./Header.module.css";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <h1 className={styles.headerTitle}>Productos</h1>
      <button className={styles.headerButton}>
        <FaShoppingCart className={styles.icon} size={48} />
        <span className={styles.count}>{0}</span>
      </button>
    </header>
  );
};

export default Header;
