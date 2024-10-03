'use client';
import '@/styles/tailwind.css';
import { ApplicationLayout } from './application-layout';
import { Header } from '@/components/Header/Header';
import { MainSection } from '@/components/MainSection/MainSection';
import { useEffect, useState } from 'react';
import clsx from 'clsx';

// export const metadata = {
//   title: {
//     template: '%s - CodeAgree',
//     default: 'CodeAgree'
//   },
//   description: ''
// };

export default function RootLayout({ children }) {
  const [isAuth, setAuth] = useState(null);

  useEffect(() => {
    let value;

    value = localStorage.getItem('test-login') || '';

    setAuth(value);
  }, []);

  console.log(isAuth);
  return (
    <html
      lang="ru"
      className={
        (clsx('text-zinc-950 antialiased dark:bg-zinc-900 dark:text-white lg:bg-zinc-100 dark:lg:bg-zinc-950'),
        isAuth && 'bg-black-900')
      }
    >
      <head></head>
      <body suppressHydrationWarning={true}>
        {isAuth ? (
          <ApplicationLayout>{children}</ApplicationLayout>
        ) : (
          <div className="h-screen w-full bg-zinc-900 pb-10">
            <Header />
            <MainSection />
          </div>
        )}
      </body>
    </html>
  );
}
