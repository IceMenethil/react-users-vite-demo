import React from "react";
import { Link } from "react-router-dom";

const UserCard = ({ name, username, email, id }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Username: {username}</p>
      <p>Email: {email}</p>
      <Link to={`/users/${id}`}>View Details</Link>
    </div>
  );
};

export default UserCard;
