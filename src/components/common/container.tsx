import { cn } from '@/lib/utils';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({ children, className }: Props) => {
  return <section className={cn('container-main', className)}>{children}</section>;
};

export default Container;