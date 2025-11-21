import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import Input from "@/components/Atoms/Input";
import { Track, TrackItem } from '../Molecules/TrackItem';

interface TrackSearchProps {
    tracks?: Track[];
    selectedTracks?: Track[];
    onSelectTrack?: (track: Track) => void;
}

export function TrackSearch({ tracks, selectedTracks, onSelectTrack }: TrackSearchProps) {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredTracks = tracks?.filter(track => 
        track.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        track.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
        track.album.toLowerCase().includes(searchQuery.toLowerCase()));

    return (
        <div className="space-y-6">
            <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </span>

                <Input 
                value={searchQuery}
                type="text" 
                name="track-search" 
                placeholder="Search for your favourite tracks..." 
                onChange={(e) => setSearchQuery(e.target.value)} 
                className="w-full px-10 rounded-lg" /> 

                { searchQuery && (
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                    {filteredTracks?.length} result{filteredTracks?.length !== 1 ? 's' : ''} found
                </span>)}
            </div>
   
            <div className="space-y-3 max-h-[600px] overflow-y-auto custom-scrollbar">
                {filteredTracks?.map((track) => (
                    <TrackItem 
                    key={track.id} 
                    track={track} 
                    onSelectTrack={onSelectTrack} 
                    isSelected={selectedTracks?.some(selected => selected.id === track.id)} />
                ))}
            </div>                
        </div>
    );
}