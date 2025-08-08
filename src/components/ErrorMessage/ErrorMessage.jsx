import React from "react";

import styles from "./ErrorMessage.module.scss";

const ErrorMessage = ({ message }) => {
  return (
    <div className={styles.error}>
      <span>{message}</span>
    </div>
  );
};

export default ErrorMessage;
