import { create } from "zustand";
import api from "../configs/axiosconfig";

const useAuthStore = create((set) => ({
  authUser: false,
  loading: false,

  verifyAuth: async () => {
    try {
      set({ loading: true });
      const response = await api.get("/auth/verify");
      if (response.data.authUser === true) {
        set({ authUser: true });
      } else {
        set({ authUser: false });
      }
    } catch (err) {
      set({ authUser: false });
    } finally {
      set({ loading: false });
    }
  },
}));
export default useAuthStore;
