import { Link } from "react-router-dom";

const NotFoundPage = () => (
  <section style={{ textAlign: "center", marginTop: 80 }}>
    <h1>Page not found</h1>
    <p>The page you are looking for does not exist.</p>
    <Link to="/about" style={{ color: "#1976d2", textDecoration: "underline" }}>
      Go to About
    </Link>

  </section>
);

export default NotFoundPage;
