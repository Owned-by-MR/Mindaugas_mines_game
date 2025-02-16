import React from 'react';
import { Tile } from '../types';

interface GridProps {
  tiles: Tile[];
  onTileClick: (id: number) => void;
}

const Grid: React.FC<GridProps> = ({ tiles, onTileClick }) => {
  return (
    <div className="grid grid-cols-5 gap-2 max-w-md mx-auto">
      {tiles.map((tile) => (
        <button
          key={tile.id}
          onClick={() => onTileClick(tile.id)}
          className={`
            aspect-square rounded-lg transition-all duration-300
            ${tile.isRevealed
              ? tile.isMine
                ? 'bg-red-600 animate-shake'
                : 'bg-green-500'
              : 'bg-gray-700 hover:bg-gray-600'
            }
            ${!tile.isRevealed && 'hover:scale-105'}
            disabled:cursor-not-allowed
          `}
          disabled={tile.isRevealed}
        >
          {tile.isRevealed && (
            <span className="text-2xl">
              {tile.isMine ? '💣' : '💎'}
            </span>
          )}
        </button>
      ))}
    </div>
  );
};

export default Grid;
