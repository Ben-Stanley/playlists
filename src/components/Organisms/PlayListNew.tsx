import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic, faPlus, faX } from "@fortawesome/free-solid-svg-icons";

import { Playlist } from "@/lib/types/Playlist";
import { Track } from "@/lib/types/Track";
import Button from "../Atoms/Button";
import TrackCard from "../Molecules/TrackCard";
import Card from "../Atoms/Card";
import { cn } from "@/lib/utils";
import Input from "../Atoms/Input";

interface PlaylistNewProps {
  selectedTracks: Track[];
  onRemoveTrack: (trackId: string) => void;
  onClearSelection: () => void;
  onCreatePlaylist: (playlist: Omit<Playlist, 'id' | 'createdAt'>) => void;
  className?: string;
}

function PlayListNew({
  selectedTracks,
  onRemoveTrack,
  onClearSelection,
  onCreatePlaylist,
  className
  }: PlaylistNewProps) {
  const [playlistName, setPlaylistName] = useState('');
  
  const handleCreatePlaylist = () => {
    if (playlistName.trim() === '' || selectedTracks.length === 0) return;

    onCreatePlaylist({ name: playlistName.trim(), tracks: [...selectedTracks] });
    setPlaylistName('');
  }

  const totalDuration = selectedTracks.reduce((total, track) => {
    const [minutes, seconds] = track.duration.split(':').map(Number);
    return total + (minutes * 60) + seconds;
  }, 0);

  const formatTotalDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <Card className={cn("min-h-[325px] mb-6 p-4 bg-background-two", className)}>
      <h2 className="text-lg mb-4">
        <FontAwesomeIcon icon={faMusic} className="mr-2 text-primary" />
        Your New Playlist ({selectedTracks.length})
      </h2>

      { selectedTracks.length === 0 ? (
        <div className="w-full h-[240px] flex items-center justify-center text-center text-gray-400">
          <div>
            <p>No tracks selected. </p>
            <p>Please select a track to create a playlist.</p>
          </div>
        </div>
      ) : (
        <div className="space-y-3 mb-4">
          <div className="max-h-[200px] overflow-y-auto custom-scrollbar space-y-3">
            {selectedTracks.map(track => (
              <TrackCard key={track.id} track={track} onRemoveTrack={onRemoveTrack} />
            ))}
          </div>
    
          <div className="flex justify-between items-center mt-2">
            <p className="font-mono text-sm text-gray-300">
              Total: {formatTotalDuration(totalDuration)}
            </p>
  
            <Button size="small" onClick={onClearSelection}>
              <FontAwesomeIcon icon={faX} size="xs" className="mr-2" />
              Clear all
            </Button>
          </div>
        </div>

        
      )}

      { selectedTracks.length > 0 && (
        <div className="flex flex-col space-y-3 mt-6">
          <Input 
          value={playlistName} 
          type="text" 
          name="playlistTitle" 
          placeholder="Give your playlist a title" 
          autoFocus 
          onChange={(e) => setPlaylistName(e.target.value)} 
          onKeyDown={(e) => e.key === 'Enter' && handleCreatePlaylist()} />

          <Button variant="primary" onClick={handleCreatePlaylist}>
            <FontAwesomeIcon icon={faPlus} className="mr-2" />
            Create Playlist
          </Button>
        </div>
      )}
    </Card>
  );
}

export default PlayListNew;
