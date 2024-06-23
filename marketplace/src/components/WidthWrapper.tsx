import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface WidthWrapperProps {
  classname?: string;
  children: ReactNode;
}

const WidthWrapper = ({ classname, children }: WidthWrapperProps) => {
  return (
    <div className={cn('mx-auto w-full max-w-screen-xl px-2.5 md:px-20', classname)}>
      {children}
    </div>
  );
};

export default WidthWrapper;
