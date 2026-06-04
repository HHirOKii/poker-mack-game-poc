import { useState } from 'react';
import type { GameSettings, GameResult, Hand } from '../types/game';
import { WEAK_HANDS } from '../types/game';
import { loadSettings, saveSettings } from '../utils/storage';

export function useGame() {
  const [settings, setSettings] = useState<GameSettings>(loadSettings());
  const [currentResult, setCurrentResult] = useState<GameResult | undefined>();
  const [currentHand, setCurrentHand] = useState<Hand | undefined>();
  const [playerName, setPlayerName] = useState('Player');

  const updateSettings = (newSettings: GameSettings) => {
    setSettings(newSettings);
    saveSettings(newSettings);
  };

  const dealHand = () => {
    const randomHand = WEAK_HANDS[Math.floor(Math.random() * WEAK_HANDS.length)];
    setCurrentHand(randomHand);
  };

  return {
    settings,
    currentResult,
    currentHand,
    playerName,
    setPlayerName,
    setCurrentResult,
    updateSettings,
    dealHand,
  };
}
