import { create } from "zustand";
import UsersApi from "../api/UsersApi";

const getCachedUsers = () => {
  try {
    const data = localStorage.getItem("users");
    return data ? JSON.parse(data) : [];
  } catch {
    console.error("Failed to parse cached users from localStorage");
    return [];
  }
};

const useUsersStore = create((set) => ({
  users: [],
  loading: false,
  error: null,

  fetchUsers: async () => {
    set({ loading: true, error: null });
    try {
      let users = getCachedUsers();

      if (!users.length) {
        users = await UsersApi.getUsers();
        localStorage.setItem("users", JSON.stringify(users));
      }
      set({ users, loading: false });
    } catch (error) {
      set({ error: error.message || "Failed to fetch users", loading: false });
    }
  },
}));

export default useUsersStore;
