function PlayListCard(props: PlayListCardProps) {
  return (
    <div className="playlist-card">
      <h2 className="playlist-title">{props.title}</h2>
      <p className="playlist-description">{props.description}</p>
    </div>
  );
}

export interface PlayListCardProps {
  title: string;
  description: string;

}

export default PlayListCard;
