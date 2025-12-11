import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'

import Button from '@/components/Atoms/Button'
import Card from '@/components/Atoms/Card'
import { Track } from '@/lib/types/Track'

export interface TrackCardProps {
	track: Track
	onRemoveTrack: (trackId: string) => void
}

function TrackCard({ track, onRemoveTrack }: TrackCardProps) {
	return (
		<Card className='flex items-center p-4 rounded-lg bg-white/10 cursor-pointer'>
			<div className='flex-1 min-w-0'>
				<h3 className='truncate font-medium'>{track.title}</h3>
				<p className='text-gray-300 truncate text-sm'>{track.artist}</p>
			</div>

			<div className='text-gray-300 font-mono text-sm mr-1'>
				{track.duration}
			</div>

			<Button
				size='small'
				variant='ghost'
				onClick={() => onRemoveTrack(track.id)}
				className='text-white/60 transition-all duration-200'
			>
				<FontAwesomeIcon icon={faX} />
			</Button>
		</Card>
	)
}

export default TrackCard
