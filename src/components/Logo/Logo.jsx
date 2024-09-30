import { NAME_APP } from '../../constants';

export const Logo = () => {
  return (
    <a
      href="#"
      className="-m-1.5 bg-gradient-to-r from-white to-orange-500 bg-clip-text p-1.5 text-2xl font-bold text-transparent focus-visible:rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
    >
      {NAME_APP}
    </a>
  );
};
