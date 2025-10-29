import { create } from "zustand";

interface User {
  email: string;
}

interface AuthState {
  user: User | null;
  error: string | null;
  login: (email: string, password: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  error: null,

  login: (email, password) => {
    const VALID_EMAIL = "Test@mail.com";
    const VALID_PASSWORD = "1234";

    if (email === VALID_EMAIL && password === VALID_PASSWORD) {
      set({ user: { email }, error: null });
    } else {
      set({ error: "E-posta veya şifre hatalı" });
    }
  },

  logout: () => {
    set({ user: null, error: null });
  },
}));
