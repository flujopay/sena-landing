import clsx from 'clsx';
import * as React from 'react';

export type ButtonVariant =
  | 'primaryFilled'
  | 'primaryOutlined'
  | 'primaryInvertedFilled'
  | 'primaryInvertedOutlined'
  | 'secondaryFilled'
  | 'secondaryOutlined'
  | 'ghost'
  | 'link';

export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const baseStyles =
  'inline-flex items-center justify-center gap-2 rounded-full font-bold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none';

const variantStyles: Record<ButtonVariant, string> = {
  primaryFilled:
    'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-600',

  primaryOutlined:
    'border border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-600',

  primaryInvertedFilled:
    'bg-white text-blue-600 hover:bg-white/90 focus:ring-white',

  primaryInvertedOutlined:
   'border border-2 border-white text-white hover:bg-white/10 focus:ring-white',

  secondaryFilled:
    'bg-orange-500 text-white hover:bg-orange-600 focus:ring-orange-500',

  secondaryOutlined:
    'border border-orange-500 text-orange-500 hover:bg-orange-50 focus:ring-orange-500',

  ghost:
    'text-gray-700 hover:bg-gray-100 focus:ring-gray-400',

  link:
    'text-blue-600 underline-offset-4 hover:underline focus:ring-blue-600',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-6 text-sm',
  lg: 'h-13 px-8 text-base',
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primaryFilled',
      size = 'md',
      fullWidth,
      loading,
      leftIcon,
      rightIcon,
      children,
      disabled,
      text,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={clsx(
            baseStyles,
            variantStyles[variant],
            sizeStyles[size],
            fullWidth && 'w-full',
            loading && 'cursor-wait',
            className
        )}
        {...props}
      >
        {loading && (
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        )}
        {!loading && leftIcon}
        <span className={loading ? 'opacity-0' : 'opacity-100'}>
            {text ?? children}
        </span>
        {!loading && rightIcon}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;