export type GameScreen = 'title' | 'prepare' | 'game' | 'result' | 'ranking';

export type CardDesign = 'classic' | 'gold' | 'neon' | 'minimal';
export type StageDesign = 'green' | 'blue' | 'burgundy' | 'modern';

export interface GameSettings {
  cardDesign: CardDesign;
  stageDesign: StageDesign;
}

export interface GameResult {
  distance: number;
  angle: number;
  power: number;
  success: boolean;
  failReason?: 'flipped';
  timestamp: number;
}

export interface RankingEntry {
  id: string;
  playerName: string;
  distance: number;
  cardDesign: CardDesign;
  stageDesign: StageDesign;
  timestamp: number;
}

export interface Hand {
  suits: string[];
  ranks: string[];
}

export const WEAK_HANDS: Hand[] = [
  { suits: ['♠', '♦'], ranks: ['7', '2'] },
  { suits: ['♣', '♥'], ranks: ['9', '3'] },
  { suits: ['♠', '♣'], ranks: ['5', '4'] },
  { suits: ['♦', '♥'], ranks: ['8', '6'] },
  { suits: ['♠', '♥'], ranks: ['2', '3'] },
  { suits: ['♣', '♦'], ranks: ['4', '7'] },
];
