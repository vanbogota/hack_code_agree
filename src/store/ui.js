import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export const useUIStore = create(
  devtools(set => ({
    isAuthModalOpened: false,

    authModalToggle: () => {
      set(state => ({
        isAuthModalOpened: (state.isAuthModalOpened = !state.isAuthModalOpened)
      }));
    }
  }))
);
