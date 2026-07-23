import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      setUser: (user) =>
        set({
          user: [],

          addUser: (newUser) =>
            set((state) => ({ user: [...state.user, newUser] })),
        }),

      isAuthenticated: false,
      setIsAuthenticated: (auth) => set({ isAuthenticated: auth }),

      logout: () => set({ user: null, isAuthenticated: false }),
    }),
    {
      name: "auth-storage", // Key in localStorage
    },
  ),
);

export { useAuthStore };
