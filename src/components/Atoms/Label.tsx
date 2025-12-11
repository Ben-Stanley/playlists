import { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

function Label({ children, htmlFor, className }: ComponentProps<'label'>) {
	return (
		<label
			htmlFor={htmlFor}
			className={cn('font-medium', className)}
		>
			{children}
		</label>
	)
}

export default Label
