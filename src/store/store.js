import { create } from "zustand";

const useActiveStore = create((set) => ({
  activeTab: "messages",
  setActiveTab: (tab) => set({ activeTab: tab }),
}));

export default useActiveStore;
