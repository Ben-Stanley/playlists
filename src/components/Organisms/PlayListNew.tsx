function PlayListNew(props: PlayListNewProps) {
  return (
    <div className="playlist-new">
      <h2>Create a New Playlist</h2>
      <form onSubmit={props.onSubmit}>
        <input
          type="text"
          placeholder="Playlist Title"
          value={props.title}
          onChange={props.onTitleChange}
        />
        <textarea
          placeholder="Playlist Description"
          value={props.description}
          onChange={props.onDescriptionChange}
        />
        <button type="submit">Create Playlist</button>
      </form>
    </div>
  );
}

export interface PlayListNewProps {
  title: string;
  description: string;
  onTitleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onDescriptionChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export default PlayListNew;
