import { Link } from "react-router-dom";

const MainLayout = ({ children }) => {
  return (
    <div style={{ maxWidth: 720, margin: "40px auto", padding: 24 }}>
      <nav style={{ marginBottom: 32 }}>
        <Link to="/about" style={{ marginRight: 16 }}>
          About
        </Link>
        <Link to="/users">Users</Link>
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
