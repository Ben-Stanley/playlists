function TrackList(props: TrackListProps) {
  return (
    <div className="track-list">
      {props.tracks.map((track) => (
        <TrackItem key={track.id} title={track.title} artist={track.artist} />
      ))}
    </div>
  );
}

export interface TrackListProps {
  tracks: Array<{
    id: string;
    title: string;
    artist: string;
  }>;
}

export default TrackList;
import TrackItem from '../Molecules/TrackItem';