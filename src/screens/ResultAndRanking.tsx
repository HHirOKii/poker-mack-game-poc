import * as S from '../styles/components';
import type { GameResult, RankingEntry } from '../types/game';
import { loadRankings } from '../utils/storage';

interface ResultScreenProps {
  result: GameResult;
  playerName: string;
  onSaveAndShowRanking: (entry: RankingEntry) => void;
  onPlayAgain: () => void;
  onPrepare: () => void;
  onTitle: () => void;
}

export function ResultScreen({
  result,
  playerName,
  onSaveAndShowRanking,
  onPlayAgain,
  onPrepare,
  onTitle,
}: ResultScreenProps) {
  const handleRanking = () => {
    const entry: RankingEntry = {
      id: Math.random().toString(),
      playerName,
      distance: result.distance,
      cardDesign: 'classic',
      stageDesign: 'green',
      timestamp: result.timestamp,
    };
    onSaveAndShowRanking(entry);
  };

  return (
    <S.Screen>
      <S.Subtitle>結果</S.Subtitle>

      <S.ResultBox>
        {result.success ? (
          <>
            <p style={{ fontSize: '1.2em', color: '#4ade80' }}>成功！</p>
            <S.ResultValue>{result.distance}m</S.ResultValue>
            <p>リリース速度: {Math.round(result.power)}%</p>
            <p>打ち上げ角: {Math.round(result.angle)}°</p>
          </>
        ) : (
          <>
            <p style={{ fontSize: '1.2em', color: '#ff6b6b' }}>失敗...</p>
            <p>カードが暴れて失速しました</p>
            <p style={{ marginTop: '15px' }}>
              最高到達点は{result.distance}mでした
            </p>
          </>
        )}
      </S.ResultBox>

      <S.ButtonGroup>
        <S.Button onClick={onPlayAgain}>もう一度遊ぶ</S.Button>
        <S.Button onClick={handleRanking}>ランキング</S.Button>
        <S.Button onClick={onPrepare}>準備する</S.Button>
        <S.Button onClick={onTitle} style={{ background: '#666' }}>
          やめる
        </S.Button>
      </S.ButtonGroup>
    </S.Screen>
  );
}

interface RankingScreenProps {
  onBack: () => void;
}

export function RankingScreen({ onBack }: RankingScreenProps) {
  const rankings = loadRankings();
  const topScore = rankings.length > 0 ? rankings[0].distance : 0;

  return (
    <S.Screen>
      <S.Subtitle>🏆 ランキング 🏆</S.Subtitle>

      {rankings.length === 0 ? (
        <p style={{ fontSize: '1.1em', marginBottom: '30px' }}>
          ランキングデータがまだありません
        </p>
      ) : (
        <>
          <div
            style={{
              background: 'rgba(255, 215, 0, 0.1)',
              border: '2px solid #ffd700',
              borderRadius: '8px',
              padding: '15px',
              marginBottom: '20px',
            }}
          >
            <p style={{ fontSize: '0.9em', color: '#888', margin: '0 0 5px 0' }}>
              最高到達点
            </p>
            <p style={{ fontSize: '2em', color: '#ffd700', margin: '0' }}>
              {topScore}m
            </p>
          </div>

          <S.RankingList>
            {rankings.map((entry, idx) => (
              <S.RankingItem key={entry.id}>
                <S.RankingRank>
                  {idx === 0 && '🥇'}
                  {idx === 1 && '🥈'}
                  {idx === 2 && '🥉'}
                  {idx > 2 && `#${idx + 1}`}
                </S.RankingRank>
                <S.RankingName>{entry.playerName}</S.RankingName>
                <S.RankingDistance>{entry.distance}m</S.RankingDistance>
              </S.RankingItem>
            ))}
          </S.RankingList>
        </>
      )}

      <S.Button onClick={onBack} style={{ marginTop: '30px' }}>
        戻る
      </S.Button>
    </S.Screen>
  );
}
