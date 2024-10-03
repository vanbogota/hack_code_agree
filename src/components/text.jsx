import clsx from 'clsx';
import { Link } from './link';

export function Text({ className, ...props }) {
  return (
    <p
      data-slot="text"
      {...props}
      className={clsx(className, 'text-base/6 text-zinc-500 dark:text-zinc-400 sm:text-sm/6')}
    />
  );
}

export function TextLink({ className, ...props }) {
  return (
    <Link
      {...props}
      className={clsx(
        className,
        'text-zinc-950 underline decoration-zinc-950/50 data-[hover]:decoration-zinc-950 dark:text-white dark:decoration-white/50 dark:data-[hover]:decoration-white'
      )}
    />
  );
}

export function Strong({ className, ...props }) {
  return <strong {...props} className={clsx(className, 'font-medium text-zinc-950 dark:text-white')} />;
}
