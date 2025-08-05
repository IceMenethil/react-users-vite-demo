import { Link } from "react-router-dom";

import styles from "./MainLayout.module.scss";

const MainLayout = ({ children }) => {
  return (
    <>
      <nav className={styles.nav}>
        <Link to="/about" className={styles.nav__link}>
          About
        </Link>
        <Link to="/users" className={styles.nav__link}>Users</Link>
      </nav>
      <div className={styles.layout}>
        <main>{children}</main>
      </div>
    </>
  );
};

export default MainLayout;
