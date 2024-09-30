import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { SERVER_URL } from '../constants';

export const useAuthStore = create(
  devtools(set => ({
    isAuth: false,
    isLoading: false,
    errorAuth: null,
    loginInfo: null,

    authRequest: async info => {
      set({ isLoading: true });
      try {
        const response = await fetch(`http://${SERVER_URL}/process_login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify(info)
        });
        if (!response.ok) throw response;
        set({ loginInfo: await response.json() });
      } catch (e) {
        let error = e;
        console.log(error);
        set({ errorAuth: 'Error' });
        error = await e.json();
        set({ errorAuth: error });
      } finally {
        set({ isLoading: false });
      }
    }
  }))
);
