import { cn } from '@/lib/utils'; // Utility for class merging

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'ghost';
  size?: 'default' | 'icon';
}

export function Button({ className, variant = 'default', size = 'default', ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
        variant === 'default' && 'bg-orange-500 text-white hover:bg-orange-600',
        variant === 'ghost' && 'hover:bg-gray-100',
        size === 'default' && 'px-4 py-2',
        size === 'icon' && 'p-2',
        className
      )}
      {...props}
    />
  );
}