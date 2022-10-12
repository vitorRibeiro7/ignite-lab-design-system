import { clsx } from 'clsx';

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