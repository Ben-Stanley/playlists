import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

import Link from 'next/link'

export default function AppHeader() {
	return (
		<header className='w-full py-6 px-6 bg-secondary text-white flex items-center justify-between shadow-md'>
			<h1 className='text-3xl font-bold text-primary'>My Playlists</h1>

			<nav>
				<ul className='flex space-x-4'>
					<li>
						<Link
							href='/'
							className='hover:underline'
						>
							<FontAwesomeIcon
								icon={faRightFromBracket}
								className='mr-2'
							/>
							Logout
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}
