import clsx from 'clsx';

type Props = {
  className?: string;
  children: React.ReactNode;
};

export function PageCenter({ children, className }: Props) {
  return (
    <section
      className={clsx(
        'flex min-h-[calc(87svh-4rem)] flex-col items-center justify-center gap-y-4',
        className
      )}
    >
      {children}
    </section>
  );
}
