import { Link } from "react-router-dom";
import useUsersStore from "../../stores/useUsersStore";
import { useEffect } from "react";

const UsersPage = () => {
  const { users, fetchUsers } = useUsersStore();
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);
  console.log(users);
  return (
    <section>
      <h1>Users</h1>
      <ul>
        {[1, 2, 3].map((id) => (
          <li key={id}>
            <Link to={`/users/${id}`}>User {id}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default UsersPage;
