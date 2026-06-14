import { useState } from 'react';
import * as S from './styles/components';
import { TitleScreen, PrepareScreen } from './screens/TitleAndPrepare';
import { PlayerNameScreen } from './screens/PlayerNameScreen';
import { EnhancedGameScreen } from './screens/EnhancedGameScreen';
import { RankingScreen } from './screens/ResultAndRanking';
import { useGame } from './hooks/useGame';
import { calculateDistance } from './utils/distanceCalculator';
import { saveRanking } from './utils/storage';
import { ThrowAnimation, ResultAnimation } from './components/AnimationDisplay';
import type { RankingEntry } from './types/game';

type AppScreen = 'title' | 'name' | 'prepare' | 'game' | 'result' | 'ranking';

export default function App() {
  const game = useGame();
  const [appScreen, setAppScreen] = useState<AppScreen>('title');
  const [showRanking, setShowRanking] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleThrow = (power: number, angle: number) => {
    const result = calculateDistance(power, angle);
    game.setCurrentResult(result);
    setIsAnimating(true);

    setTimeout(() => {
      setAppScreen('result');
      setIsAnimating(false);
    }, 1900);
  };

  const handleSaveAndShowRanking = (entry: RankingEntry) => {
    saveRanking(entry);
    setShowRanking(true);
  };

  const handlePlayAgain = () => {
    setShowRanking(false);
    setAppScreen('game');
    game.dealHand();
  };

  const handlePrepare = () => {
    setShowRanking(false);
    setAppScreen('prepare');
  };

  const handleTitle = () => {
    setShowRanking(false);
    setAppScreen('title');
  };

  return (
    <S.Container>
      {appScreen === 'title' && (
        <TitleScreen onStart={() => setAppScreen('name')} />
      )}

      {appScreen === 'name' && (
        <PlayerNameScreen
          onStart={(name) => {
            game.setPlayerName(name);
            setAppScreen('prepare');
          }}
        />
      )}

      {appScreen === 'prepare' && (
        <PrepareScreen
          settings={game.settings}
          onSettingsChange={game.updateSettings}
          onStart={() => {
            game.dealHand();
            setAppScreen('game');
          }}
        />
      )}

      {appScreen === 'game' && !isAnimating && (
        <EnhancedGameScreen hand={game.currentHand} onThrow={handleThrow} />
      )}

      {appScreen === 'game' && isAnimating && game.currentResult && (
        <ThrowAnimation
          result={game.currentResult}
          onAnimationComplete={() => {}}
        />
      )}

      {appScreen === 'result' && !showRanking && game.currentResult && (
        <>
          <ResultAnimation result={game.currentResult} />
          <S.Screen>
            <S.ButtonGroup style={{ marginTop: '30px' }}>
              <S.Button onClick={handlePlayAgain}>もう一度遊ぶ</S.Button>
              <S.Button
                onClick={() => {
                  const entry: RankingEntry = {
                    id: Math.random().toString(),
                    playerName: game.playerName,
                    distance: game.currentResult!.distance,
                    cardDesign: 'classic',
                    stageDesign: 'green',
                    timestamp: game.currentResult!.timestamp,
                  };
                  handleSaveAndShowRanking(entry);
                }}
              >
                ランキング
              </S.Button>
              <S.Button onClick={handlePrepare}>準備する</S.Button>
              <S.Button onClick={handleTitle} style={{ background: '#666' }}>
                やめる
              </S.Button>
            </S.ButtonGroup>
          </S.Screen>
        </>
      )}

      {showRanking && <RankingScreen onBack={() => setShowRanking(false)} />}
    </S.Container>
  );
}
