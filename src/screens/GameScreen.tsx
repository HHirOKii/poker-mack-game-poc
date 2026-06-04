import { useState } from 'react';
import * as S from '../styles/components';
import { CardDisplay } from '../components/CardDisplay';
import { GaugeBar } from '../components/GaugeBar';
import type { Hand } from '../types/game';

interface GameScreenProps {
  hand?: Hand;
  onThrow: (power: number, angle: number) => void;
}

export function GameScreen({ hand, onThrow }: GameScreenProps) {
  const [step, setStep] = useState<'ready' | 'power' | 'angle'>('ready');
  const [power, setPower] = useState(50);

  return (
    <S.Screen>
      <S.Subtitle>ゲーム画面</S.Subtitle>

      {step === 'ready' && (
        <>
          <S.Message>フォールドしろ！！</S.Message>
          <CardDisplay hand={hand} isBack={true} />
          <S.Button onClick={() => setStep('power')} style={{ fontSize: '1.2em' }}>
            マックでフォールド！
          </S.Button>
        </>
      )}

      {step === 'power' && (
        <>
          <p style={{ fontSize: '1.1em', marginBottom: '20px' }}>投げる力を選択:</p>
          <GaugeBar
            label="投げの強さ"
            onConfirm={(value) => {
              setPower(value);
              setStep('angle');
            }}
          />
        </>
      )}

      {step === 'angle' && (
        <>
          <p style={{ fontSize: '1.1em', marginBottom: '20px' }}>ハンドの角度を選択:</p>
          <p style={{ fontSize: '0.9em', color: '#ffd700', marginBottom: '20px' }}>
            水平に近いほど成功しやすい
          </p>
          <GaugeBar
            label="回転角度"
            onConfirm={(angle) => {
              onThrow(power, angle);
            }}
          />
        </>
      )}
    </S.Screen>
  );
}
