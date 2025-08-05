import { useEffect, useState } from "react";
import useUsersStore from "../../stores/useUsersStore";
import UserCard from "../../components/UserCard";

import styles from "./UsersPage.module.scss";

const UsersPage = () => {
  const { users, fetchUsers } = useUsersStore();
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <section style={{ marginBottom: '30px' }}>
      <h1 className={styles.users__title}>Users</h1>
      <input
        className={styles.users__filter}
        type="text"
        name="filter"
        placeholder="Filter by name..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        style={{ marginBottom: 16, padding: 8, width: "100%" }}
      />
      <ul>
        {filteredUsers.map((user) => (
          <UserCard {...user} key={user.id} />
        ))}
      </ul>
    </section>
  );
};

export default UsersPage;
