import { Routes, Route, Navigate } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import UsersPage from "../features/users/UsersPage";
import UserDetailPage from "../features/users/UserDetailPage";
import NotFoundPage from "../pages/NotFoundPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/about" />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/users" element={<UsersPage />} />
      <Route path="/users/:id" element={<UserDetailPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
