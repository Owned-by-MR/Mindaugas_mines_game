export interface Tile {
    id: number;
    isRevealed: boolean;
    isMine: boolean;
  }
  
  export interface GameState {
    tiles: Tile[];
    betAmount: number;
    numberOfMines: number;
    isGameActive: boolean;
    currentMultiplier: number;
    potentialWinnings: number;
    canCashout: boolean;
  }
  