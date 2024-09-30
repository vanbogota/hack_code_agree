import clsx from 'clsx';
import { useAuthStore } from '../../store/store';
import { Button } from '../Button/Button';
import { LoadingIcon } from '../icons/LoadingIcon';

export const AuthForm = () => {
  const { authRequest, isLoading, errorAuth } = useAuthStore();

  const handleSubmit = event => {
    event.preventDefault();

    authRequest({
      username: event.target.username.value,
      password: event.target.password.value
    });
  };

  return (
    <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
          Логин:
        </label>
        <div className="mt-1">
          <input
            id="username"
            name="username"
            type="email"
            required
            className="block w-full appearance-none rounded-md border border-gray-300 bg-slate-50 px-3 py-2 text-zinc-950 placeholder-gray-700 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500 sm:text-sm"
          />
        </div>
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Пароль:
        </label>
        <div className="mt-1">
          <input
            id="password"
            name="password"
            type="password"
            required
            className="block w-full appearance-none rounded-md border border-gray-300 bg-slate-50 px-3 py-2 text-zinc-950 placeholder-gray-700 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500 sm:text-sm"
          />
        </div>
      </div>

      <div>
        <Button color="orange" className="w-full" type="submit">
          Войти {isLoading && <LoadingIcon />}
        </Button>
      </div>
      <div className={clsx('opacity-0', errorAuth && 'font-bold text-red-500 opacity-100')}>{errorAuth}</div>
    </form>
  );
};
