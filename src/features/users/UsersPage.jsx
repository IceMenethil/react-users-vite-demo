import { useEffect, useState } from "react";
import useUsersStore from "../../stores/useUsersStore";
import UserCard from "../../components/UserCard";

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
    <section>
      <h1>Users</h1>
      <input
        type="text"
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
