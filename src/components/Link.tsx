import { useRouter } from '@/context/RouterContext';

interface LinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Link({ to, children, className, onClick }: LinkProps) {
  const { navigate } = useRouter();

  return (
    <a
      href={to}
      className={className}
      onClick={(e) => {
        e.preventDefault();
        onClick?.();
        navigate(to);
      }}
    >
      {children}
    </a>
  );
}
