function TrackCard(props: TrackCardProps) {
  return (
    <div className="track-card">
      <h3 className="track-title">{props.title}</h3>
      <p className="track-artist">{props.artist}</p>
    </div>
  );
}

export interface TrackCardProps {
  title: string;
  artist: string;
}

export default TrackCard;
