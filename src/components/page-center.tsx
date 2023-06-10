import clsx from 'clsx';

type Props = {
  className?: string;
  children: React.ReactNode;
};

export function PageCenter({ children, className }: Props) {
  return (
    <section
      className={clsx(
        'flex min-h-[calc(100svh-10rem)] flex-col items-center justify-center gap-y-4',
        className
      )}
    >
      {children}
    </section>
  );
}
