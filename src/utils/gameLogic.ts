import { Tile } from '../types';

export const initializeGame = (numberOfMines: number): Tile[] => {
  const tiles: Tile[] = Array(25)
    .fill(null)
    .map((_, index) => ({
      id: index,
      isRevealed: false,
      isMine: false,
    }));

  // Place of mines
  let minesPlaced = 0;
  while (minesPlaced < numberOfMines) {
    const randomIndex = Math.floor(Math.random() * 25);
    if (!tiles[randomIndex].isMine) {
      tiles[randomIndex].isMine = true;
      minesPlaced++;
    }
  }

  return tiles;
};

export const calculateMultiplier = (
  revealedTiles: number,
  numberOfMines: number
): number => {
  return 1 + (revealedTiles * 0.1 * (numberOfMines / 3));
};
