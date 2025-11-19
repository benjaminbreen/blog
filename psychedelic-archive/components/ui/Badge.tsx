import { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'primary' | 'purple' | 'blue' | 'green' | 'orange' | 'red' | 'pink'
}

function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors',
        {
          'bg-gray-100 text-gray-800': variant === 'default',
          'bg-primary-100 text-primary-800': variant === 'primary' || variant === 'purple',
          'bg-blue-100 text-blue-800': variant === 'blue',
          'bg-green-100 text-green-800': variant === 'green',
          'bg-orange-100 text-orange-800': variant === 'orange',
          'bg-red-100 text-red-800': variant === 'red',
          'bg-pink-100 text-pink-800': variant === 'pink',
        },
        className
      )}
      {...props}
    />
  )
}

export { Badge }
