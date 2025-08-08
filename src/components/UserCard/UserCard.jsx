import { Link } from "react-router-dom";

import styles from "./UserCard.module.scss";

const UserCard = ({ name, username, id }) => {
  return (
    <div className={styles.userCard}>
      <div className={styles.userCard__info}>
        <h2 className={styles.userCard__title}>{name}</h2>
        <p className={styles.userCard__name}>Username: {username}</p>
      </div>
      <Link to={`/users/${id}`} className={styles.userCard__btn}>Details</Link>
    </div>
  );
};

export default UserCard;
