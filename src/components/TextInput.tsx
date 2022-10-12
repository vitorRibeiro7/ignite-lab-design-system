import { ReactNode } from 'react';
import { clsx } from 'clsx';
import { InputHTMLAttributes } from 'react';


export interface TextInputRootProps {
    children: ReactNode;
}

function TextInputRoot(props: TextInputRootProps) {
    return (
        <div className='flex items-center gap-3 py-4 px-3 bg-gray-800 w-full rounded focus-within:ring-2 ring-cyan-300'>
            {props.children}
        </div>
    )
}

// function TextInputIcon() { }

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> { }

export function TextInputInput(props: TextInputInputProps) {
    return (
        <input
            className={'bg-transparent flex-1 w-full text-gray-100 text-xs outline-none placeholder:text-gray-400'}
            {...props}
        />
    );
}

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    // Icon: TextInputIcon
}