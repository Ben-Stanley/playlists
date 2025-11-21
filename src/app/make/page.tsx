'use client'

import Card from "@/components/Atoms/Card";
import { TrackSearch } from "@/components/Organisms/TrackSearch";
import { mockTracks } from "@/data/TracksData";
import { Track } from "@/lib/types/Track";
import { Playlist } from "@/lib/types/Playlist";
import { useState } from "react";
import PlayListNew from "@/components/Organisms/PlayListNew";
import PlayLists from "@/components/Organisms/PlayLists";

export default function MakePage() {
    /* Two column page layout - 2/3 1/3 - left column: track selection, right column: new playlist details. playlist collection*/
    const [selectedTracks, setSelectedTracks] = useState<Track[]>([]);
    const [playlists, setPlaylists] = useState<Playlist[]>([]);

    const handleAddToPlaylist = (track: Track) => {
        setSelectedTracks(prev => {
            const exists = prev.find(t => t.id === track.id);

            if (exists) {
                // Remove if already selected
                return prev.filter(t => t.id !== track.id);
            } else {
                // Add if not selected
                return [...prev, track];
            }
        });
    };

    const handleCreatePlaylist = (playlistData: Omit<Playlist, 'id' | 'createdAt'>) => {
        const newPlaylist: Playlist = {
            ...playlistData,
            id: Date.now().toString(),
            createdAt: new Date()
        };

        setPlaylists(prev => [newPlaylist, ...prev]);
    };

    const handleRemoveTrack = (trackId: string) => {
    setSelectedTracks(prev => prev.filter(t => t.id !== trackId));
  };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 px-6 pt-12 pb-8">
            <div className="col-span-1 sm:col-span-2 rounded-lg">
                <h2 className="text-2xl font-bold mb-2">Track Selection</h2>
                <p className="mb-6">Dive into our sonic universe and curate the perfect mix</p>

                <TrackSearch 
                tracks={mockTracks}
                onSelectTrack={handleAddToPlaylist}
                selectedTracks={selectedTracks} /> 
            </div>
            <div className="col-span-1 rounded-lg">
                <h2 className="text-2xl font-bold mb-2">Craft Your Playlist</h2>
                <p className="mb-6">Mix, match, and create your musical masterpiece</p>

                <PlayListNew 
                selectedTracks={selectedTracks} 
                onRemoveTrack={handleRemoveTrack} 
                onClearSelection={() => setSelectedTracks([])} 
                onCreatePlaylist={handleCreatePlaylist} 
                className="mb-6"/>

                <PlayLists playlists={playlists} />
            </div>
        </div>
    );
}