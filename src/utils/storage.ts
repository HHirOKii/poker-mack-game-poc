import type { GameSettings, RankingEntry } from '../types/game';

const SETTINGS_KEY = 'mack_game_settings';
const RANKINGS_KEY = 'mack_game_rankings';

export function saveSettings(settings: GameSettings): void {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
}

export function loadSettings(): GameSettings {
  const stored = localStorage.getItem(SETTINGS_KEY);
  if (stored) {
    return JSON.parse(stored);
  }
  return {
    cardDesign: 'classic',
    stageDesign: 'green',
  };
}

export function saveRanking(entry: RankingEntry): void {
  const rankings = loadRankings();
  rankings.push(entry);
  rankings.sort((a, b) => b.distance - a.distance);
  localStorage.setItem(RANKINGS_KEY, JSON.stringify(rankings.slice(0, 100)));
}

export function loadRankings(): RankingEntry[] {
  const stored = localStorage.getItem(RANKINGS_KEY);
  if (stored) {
    return JSON.parse(stored);
  }
  return [];
}
