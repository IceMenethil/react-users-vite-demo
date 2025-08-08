import React from "react";

import styles from "./LoadingSpinner.module.scss";

const LoadingSpinner = ({ message = "Loading..." }) => {
  return (
    <div className={styles.loading}>
      <div className={styles.loading__spinner}></div>
      <span className={styles.loading__message}>{message}</span>
    </div>
  );
};

export default LoadingSpinner;
