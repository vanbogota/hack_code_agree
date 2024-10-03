import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export const useUserStore = create(
  devtools(set => ({
    userInfo: {
      login: 'manager_1@gmail.com',
      nickname: 'Олег Иванов',
      avatar: '/users/user.jpg'
    }

    // getUserInfo: () => {
    //   return userInfo;
    // }
  }))
);
