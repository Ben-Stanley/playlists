import { Playlist } from '@/lib/types/Playlist'
import Card from '../Atoms/Card'

export interface PlayListCardProps {
	playlist: Playlist
}

function PlayListCard({ playlist }: PlayListCardProps) {
	return (
		<Card className='flex items-center p-4 rounded-lg bg-white/10 cursor-pointer'>
			<div className='flex-1 min-w-0'>
				<h3 className='truncate text-lg font-medium'>{playlist.name}</h3>
				<p className='text-gray-300 truncate text-sm'>
					Created: {playlist.createdAt.toLocaleDateString()}
				</p>
			</div>

			<div className='text-gray-300 font-mono text-sm mr-1'>
				{playlist.tracks.length} track{playlist.tracks.length !== 1 ? 's' : ''}
			</div>
		</Card>
	)
}

export default PlayListCard
