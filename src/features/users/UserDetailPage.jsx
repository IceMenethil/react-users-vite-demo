import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import useUsersStore from "../../stores/useUsersStore";

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
      style={{
        maxWidth: 400,
        margin: "40px auto",
        padding: 24,
        border: "1px solid #eee",
        borderRadius: 8,
      }}
    >
      <h2>User Details</h2>
      <div>
        <strong>First Name:</strong> {firstName}
      </div>
      <div>
        <strong>Last Name:</strong> {lastName}
      </div>
      <div>
        <strong>Username:</strong> {user.username}
      </div>
      <div>
        <strong>Email:</strong> {user.email}
      </div>
      <div>
        <strong>Phone:</strong> {user.phone}
      </div>
      <button
        style={{ marginTop: 24, padding: "8px 16px", cursor: "pointer" }}
        onClick={() => navigate("/users")}
      >
        Back
      </button>
    </section>
  );
};

export default UserDetailPage;
