'use client'

import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStarOfLife } from '@fortawesome/free-solid-svg-icons'

import useStore from '@/store/store'
import Button from '@/components/Atoms/Button'
import Card from '@/components/Atoms/Card'
import FieldItem from '@/components/Atoms/FieldItem'
import Input from '@/components/Atoms/Input'

export default function LoginPage() {
	interface FormValues {
		email: string
		password: string
	}

	const schema = z.object({
		email: z.string().email({ message: 'Invalid email address' }),
		password: z.string().min(8, 'Password is not required length'),
	})

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>({
		resolver: zodResolver(schema),
	})

	const router = useRouter()
	const { toggleAuthorisation } = useStore()

	const onSubmit = (data: FormValues) => {
		console.log('Logging in with', data)

		document.cookie = 'token=true; path=/; max-age=3600' // 1 hour expiry

		toggleAuthorisation(true)

		router.push('/make')
	}

	return (
		<div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 pb-20 gap-16 sm:p-20'>
			<main className='flex flex-col gap-[32px] row-start-2 items-center sm:items-start sm:w-96 h-full'>
				<div className='w-full text-center space-y-2'>
					<h1 className='text-4xl font-bold'>Playlist Maker</h1>

					<p className='text-lg'>Create and manage your playlists with ease.</p>
				</div>

				<Card className='w-full'>
					<div className='text-center space-y-2'>
						<h2 className='text-2xl font-bold'>Welcome back</h2>
						<p className='text-base'>Sign in with your Apple Music account</p>
					</div>

					<form
						onSubmit={handleSubmit(onSubmit)}
						className='mt-8 flex flex-col gap-4'
					>
						<FieldItem
							label='Email'
							htmlFor='email'
							error={errors.email?.message}
						>
							<Input
								{...register('email')}
								type='text'
								name='email'
								placeholder='Enter your email'
							/>
						</FieldItem>

						<FieldItem
							label='Password'
							htmlFor='password'
							error={errors.password?.message}
						>
							<Input
								{...register('password')}
								type='password'
								name='password'
								placeholder='Enter your password'
							/>
						</FieldItem>

						<Button
							variant='primary'
							className='mt-8'
						>
							Sign in with Apple Music
						</Button>
					</form>
				</Card>
			</main>

			<footer className='text-center row-start-3'>
				<p className='flex items-center justify-center gap-2'>
					<span>Discover</span>
					<FontAwesomeIcon
						icon={faStarOfLife}
						className='text-primary'
					/>
					<span>Create</span>
					<FontAwesomeIcon
						icon={faStarOfLife}
						className='text-primary'
					/>
					<span>Listen</span>
				</p>
			</footer>
		</div>
	)
}
