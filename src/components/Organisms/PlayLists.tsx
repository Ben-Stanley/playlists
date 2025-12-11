import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList } from '@fortawesome/free-solid-svg-icons'

import { Playlist } from '@/lib/types/Playlist'
import Card from '../Atoms/Card'
import { cn } from '@/lib/utils'
import PlayListCard from '../Molecules/PlayListCard'

interface PlayListsProps {
	playlists: Playlist[]
	className?: string
}

function PlayLists({ playlists, className }: PlayListsProps) {
	return (
		<Card className={cn('min-h-[325px] mb-6 p-4 bg-background-two', className)}>
			<h2 className='text-lg mb-4'>
				<FontAwesomeIcon
					icon={faList}
					className='mr-2 text-primary'
				/>
				Your Playlists ({playlists.length})
			</h2>

			{playlists.length === 0 ? (
				<div className='w-full h-[240px] flex items-center justify-center text-center text-gray-400'>
					<div className=''>
						<p>No playlists available.</p>
						<p>Please create a playlist.</p>
					</div>
				</div>
			) : (
				<div className='space-y-3 max-h-[240px] overflow-y-auto custom-scrollbar'>
					{playlists.map((playlist) => (
						<PlayListCard
							key={playlist.id}
							playlist={playlist}
						/>
					))}
				</div>
			)}
		</Card>
	)
}

export default PlayLists
