import React, { useState, useEffect } from 'react';
import Grid from './Grid.tsx';
import BetControls from './BetControls.tsx';
import GameStats from './GameStats.tsx';
import { GameState, Tile } from '../types';
import { initializeGame, calculateMultiplier } from '../utils/gameLogic';
import '../styles/main.scss'; 


const Game: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>({
    tiles: [],
    betAmount: 1,
    numberOfMines: 3,
    isGameActive: false,
    currentMultiplier: 1,
    potentialWinnings: 0,
    canCashout: false,
  });

  const handleCashout = () => {
    if (!gameState.canCashout) return;
    
    const winnings = gameState.betAmount * gameState.currentMultiplier;

    setGameState(prev => ({
      ...prev,
      canCashout: false,
      isGameActive: false,
    }));
    
    alert(`Successfully cashed out: ${winnings.toFixed(2)} £`);
  };

  const startGame = () => {
    const initialTiles = initializeGame(gameState.numberOfMines);
    setGameState(prev => ({
      ...prev,
      tiles: initialTiles,
      isGameActive: true,
      currentMultiplier: 1,
      potentialWinnings: prev.betAmount,
      canCashout: true,
    }));
  };

  const handleTileClick = (tileId: number) => {
    if (!gameState.isGameActive || !gameState.canCashout) return;

    setGameState(prev => {
      const newTiles = [...prev.tiles];
      const clickedTile = newTiles[tileId];

      if (clickedTile.isMine) {
        alert("Game Over! You hit a mine!");
        return {
          ...prev,
          tiles: newTiles.map(tile => ({ ...tile, isRevealed: true })),
          isGameActive: false,
          potentialWinnings: 0,
          canCashout: false,
        };
      }

      clickedTile.isRevealed = true;
      const newMultiplier = calculateMultiplier(
        newTiles.filter(t => t.isRevealed).length,
        prev.numberOfMines
      );

      return {
        ...prev,
        tiles: newTiles,
        currentMultiplier: newMultiplier,
        potentialWinnings: prev.betAmount * newMultiplier,
        canCashout: true,
      };
    });
  };

  return (
    <div className="game-wrapper">
    <div className="game-container">
      <h1 className="game-title">
        Mines Game Mindaugas
      </h1>
      
      <div className="game-layout">
        <div className="game-panel">
          <BetControls
            gameState={gameState}
            setGameState={setGameState}
            onStart={startGame}
          />
        </div>
        
        <div className="game-panel">
          <GameStats gameState={gameState} />
          
          <button 
            onClick={handleCashout}
            disabled={!gameState.canCashout}
            className={`cashout-button ${gameState.canCashout ? 'active' : 'disabled'}`}
          >
            CASH OUT ({gameState.potentialWinnings.toFixed(2)} £)
          </button>
        </div>
      </div>

      <div className="grid-section">
        <Grid tiles={gameState.tiles} onTileClick={handleTileClick} />
      </div>
    </div>
  </div>
  );
};

export default Game;
