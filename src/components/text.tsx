import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';

export interface textProps {
    size?: 'sm' | 'md' | 'lg';
    children: string;
}

export function text({ size = 'md', children }: textProps) {
    return (
        <span
            className={clsx(
                'text-gray-100 font-sans',
                {
                    'text-xs': size === 'sm',
                    'text-sm': size === 'md',
                    'text-md': size === 'lg',
                }
            )}
        >
            {children}
        </span>
    );
}