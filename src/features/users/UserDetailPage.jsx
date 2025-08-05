import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import useUsersStore from "../../stores/useUsersStore";

import styles from "./UserDetailPage.module.scss";

const UserDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { users } = useUsersStore();

  const user = users.find((u) => String(u.id) === String(id));

  if (!user) {
    return <div>User not found.</div>;
  }

  const [firstName, ...rest] = user.name.split(" ");
  const lastName = rest.join(" ");

  return (
    <section
      className={styles.userDetailPage}
      
    >
      <h2 className={styles.userDetailPage__title}>User Details</h2>
      <div className={styles.userDetailPage__info}>
        <p><strong>First Name:</strong> {firstName}</p>
        <p><strong>Last Name:</strong> {lastName}</p>
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
      </div>
      <button
        className={styles.userDetailPage__backBtn}
        type="button"
        onClick={() => navigate("/users")}
      >
        Back
      </button>
    </section>
  );
};

export default UserDetailPage;
