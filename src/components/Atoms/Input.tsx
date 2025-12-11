import { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

function Input({ className, type, name, ...props }: ComponentProps<'input'>) {
	return (
		<input
			type={type}
			name={name}
			id={name}
			className={cn(
				'px-4 py-2 border border-gray-500 rounded bg-input focus:border-primary',
				className
			)}
			{...props}
		/>
	)
}

export default Input
