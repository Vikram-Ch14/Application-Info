import { create } from "zustand";

export type UserData = {
  email: string;
  username: string;
  id: string;
  blocked: string[];
};

export type UserChats = {
  chats: string[];
};

export type AuthStore = {
  currentUser: UserData | null;
  setCurrentUser: (currentUser: UserData | null) => void;
};

export const useAuthStore = create<AuthStore>((set) => ({
  currentUser: null,
  setCurrentUser: (currentUser) => set({ currentUser: currentUser }),
}));
