import React from 'react';
import { Platform } from '../../types';

interface PlatformFilterProps {
  onSelectPlatform: (platform: Platform | null) => void;
  selectedPlatform: Platform | null;
}

const platforms: Platform[] = [
  "PC", 
  "PlayStation", 
  "Xbox", 
  "Nintendo", 
  "Mobile"
];

const PlatformFilter: React.FC<PlatformFilterProps> = ({ onSelectPlatform, selectedPlatform }) => {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-4">Platforms</h3>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onSelectPlatform(null)}
          className={`px-3 py-1 rounded-full text-sm transition-colors ${
            selectedPlatform === null
              ? 'bg-purple-600 text-white'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
        >
          All
        </button>
        
        {platforms.map((platform) => (
          <button
            key={platform}
            onClick={() => onSelectPlatform(platform)}
            className={`px-3 py-1 rounded-full text-sm transition-colors ${
              selectedPlatform === platform
                ? 'bg-purple-600 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            {platform}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PlatformFilter;