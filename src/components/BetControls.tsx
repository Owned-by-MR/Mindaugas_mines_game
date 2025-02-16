import React from 'react';
import { GameState } from '../types';

interface BetControlsProps {
  gameState: GameState;
  setGameState: React.Dispatch<React.SetStateAction<GameState>>;
  onStart: () => void;
}

const BetControls: React.FC<BetControlsProps> = ({
  gameState,
  setGameState,
  onStart,
}) => {
  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-2">
        <label className="text-gray-300">Bet Amount</label>
        <input
          type="number"
          min="1"
          value={gameState.betAmount}
          onChange={(e) =>
            setGameState(prev => ({
              ...prev,
              betAmount: Number(e.target.value),
            }))
          }
          className="bg-gray-700 rounded-lg p-2 text-white"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-gray-300">Number of Mines</label>
        <input
          type="range"
          min="1"
          max="24"
          value={gameState.numberOfMines}
          onChange={(e) =>
            setGameState(prev => ({
              ...prev,
              numberOfMines: Number(e.target.value),
            }))
          }
          className="accent-purple-500"
        />
        <span className="text-center">{gameState.numberOfMines}</span>
      </div>

      <button
        onClick={onStart}
        disabled={gameState.isGameActive}
        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Start Game
      </button>
    </div>
  );
};

export default BetControls;
