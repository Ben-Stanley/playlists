import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faCheck } from '@fortawesome/free-solid-svg-icons'

import Image from 'next/image'
import Card from '@/components/Atoms/Card'
import Button from '../Atoms/Button'

export interface Track {
	id: string
	title: string
	artist: string
	album: string
	duration: string
	coverUrl: string
}

export interface TrackItemProps {
	track: Track
	onSelectTrack?: (track: Track) => void
	isSelected?: boolean
}

export function TrackItem({
	track,
	onSelectTrack,
	isSelected,
}: TrackItemProps) {
	return (
		<Card
			className={`flex items-center gap-4 p-4 rounded-xl bg-background-two cursor-pointer ${
				isSelected ? 'border-1 border-primary' : ''
			}`}
		>
			<Image
				src={track.coverUrl}
				width={64}
				height={64}
				alt={track.title}
				className='w-16 h-16 rounded-md object-cover'
			/>

			<div className='flex-1 min-w-0'>
				<h3 className='font-semibold text-lg'>{track.title}</h3>
				<p className='text-base font-medium text-gray-300'>{track.artist}</p>
				<p className='text-sm font-light text-gray-400'>{track.album}</p>
			</div>

			<div className='flex items-center gap-3'>
				<span className='text-sm font-light font-mono text-gray-300'>
					{track.duration}
				</span>

				<Button
					variant='primary'
					size='small'
					onClick={() => onSelectTrack && onSelectTrack(track)}
					className='rounded-lg'
				>
					<FontAwesomeIcon icon={isSelected ? faCheck : faPlus} />
				</Button>
			</div>
		</Card>
	)
}
