function PlayLists(props: PlayListsProps) {
  return (
    <div className="playlists">
      {props.playlists.map((playlist) => (
        <PlayListCard
          key={playlist.id}
          title={playlist.title}
          description={playlist.description}
        />
      ))}
    </div>
  );
}

export interface PlayListsProps {
  playlists: Array<{
    id: string;
    title: string;
    description: string;
  }>;
}

export default PlayLists;
import PlayListCard from '../Molecules/PlayListCard';