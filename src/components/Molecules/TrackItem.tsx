function TrackItem(props: TrackItemProps) {
  return (
    <div className="track-item">
      <h3 className="track-title">{props.title}</h3>
      <p className="track-artist">{props.artist}</p>
    </div>
  );
}

export interface TrackItemProps {
  title: string;
  artist: string;
}

export default TrackItem;
