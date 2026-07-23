import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
  persist(
    (set) => ({
      users: [],
      currentUser: null,
      isAuthenticated: false,

      addUser: (newUser) =>
        set((state) => ({
          users: [...state.users, newUser],
        })),

      setCurrentUser: (user) =>
        set({
          currentUser: user,
        }),

      setIsAuthenticated: (auth) =>
        set({
          isAuthenticated: auth,
        }),

      logout: () =>
        set({
          currentUser: null,
          isAuthenticated: false,
        }),
    }),
    {
      name: "auth-storage",
    },
  ),
);
