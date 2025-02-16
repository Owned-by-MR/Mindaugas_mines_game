import React from 'react';
import { GameState } from '../types';

interface GameStatsProps {
  gameState: GameState;
}

const GameStats: React.FC<GameStatsProps> = ({ gameState }) => {
  return (
    <div className="space-y-4">
      <div className="stats-container space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-gray-300">Current Multiplier:</span>
          <span className="text-2xl font-bold text-purple-400">
            {gameState.currentMultiplier}x
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-300">Potential Winnings:</span>
          <span className="text-2xl font-bold text-green-400">
            {gameState.potentialWinnings.toFixed(2)} £
          </span>
        </div>
      </div>
    </div>
  );
};

export default GameStats;
