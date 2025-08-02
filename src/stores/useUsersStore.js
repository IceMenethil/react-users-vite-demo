import { create } from "zustand";
import UsersApi from "../api/UsersApi";

const useUsersStore = create((set) => ({
  users: [],
  loading: false,
  error: null,

  fetchUsers: async () => {
    set({ loading: true, error: null });
    try {
      const users = await UsersApi.getUsers();
      set({ users, loading: false });
    } catch (error) {
      set({ error: error.message || "Failed to fetch users", loading: false });
    }
  },
}));

export default useUsersStore;
