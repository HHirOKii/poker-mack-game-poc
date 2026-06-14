import { useState } from 'react';
import { motion } from 'framer-motion';
import * as S from '../styles/components';
import type { Hand } from '../types/game';
import { GaugeBar } from '../components/GaugeBar';

interface EnhancedGameScreenProps {
  hand?: Hand;
  onThrow: (power: number, angle: number) => void;
}

export function EnhancedGameScreen({ hand, onThrow }: EnhancedGameScreenProps) {
  const [step, setStep] = useState<'ready' | 'power' | 'angle'>('ready');
  const [power, setPower] = useState(50);
  const [livePower, setLivePower] = useState(50);
  const [liveAngle, setLiveAngle] = useState(82);

  const previewPower = step === 'power' ? livePower : power;
  const previewAngle = step === 'angle' ? liveAngle : 82;
  const pullBack = Math.min(82, previewPower * 0.82);
  const cardRotation = -18 + previewAngle * 0.55;
  const liftPreview = Math.min(150, previewPower * 1.35 * Math.sin((previewAngle * Math.PI) / 180));

  return (
    <S.Screen>
      <S.GameHeader>
        <span>HEIGHT CHALLENGE</span>
        <strong>どこまで高くマックできるか</strong>
      </S.GameHeader>

      <S.HeightStage>
        <S.PixelSkyline />
        <S.TablePlane />
        <S.TableEdge />
        <S.HeightMarks>
          <span>12m</span>
          <span>8m</span>
          <span>4m</span>
        </S.HeightMarks>
        <S.TargetRing>HIGH</S.TargetRing>
        <S.TargetPlatform />
        <S.UnderhandPlayer>
          <S.PlayerShadow />
          <S.PlayerBody />
          <S.PlayerArm
            as={motion.div}
            animate={{ rotate: 18 - pullBack / 5, x: -pullBack / 7 }}
            transition={{ duration: 0.08 }}
          />
          <S.Card
            as={motion.div}
            animate={{
              x: 44 - pullBack * 0.25,
              y: 58 - liftPreview * 0.55,
              rotate: cardRotation,
              scale: 0.72 + previewPower / 360,
            }}
            transition={{ duration: 0.08 }}
            style={{
              position: 'absolute',
              left: '58%',
              bottom: 18,
              width: 74,
              height: 112,
              padding: 6,
              margin: 0,
            }}
          >
            <S.CardBack>♠♥♦♣</S.CardBack>
          </S.Card>
          <S.LiftBeam
            style={{
              height: `${70 + liftPreview}px`,
              opacity: 0.16 + previewPower / 180,
              transform: `translateX(-50%) rotate(${Math.max(-24, 92 - previewAngle)}deg)`,
            }}
          />
        </S.UnderhandPlayer>
      </S.HeightStage>

      {hand && (
        <S.HandReadout>
          捨てる手札: {hand.ranks[0]}{hand.suits[0]} / {hand.ranks[1]}{hand.suits[1]}
        </S.HandReadout>
      )}

      {step === 'ready' && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.25 }}>
          <S.Message>低く構えて、真上の的を狙え</S.Message>
          <S.Button onClick={() => setStep('power')} style={{ fontSize: '1.15em' }}>
            投げる準備
          </S.Button>
        </motion.div>
      )}

      {step === 'power' && (
        <S.HudPanel as={motion.div} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}>
          <GaugeBar
            label="リリース速度"
            description="腕をどれだけ引いて、カードをどれだけ速く弾くか。強すぎると姿勢が崩れる。"
            marker={82}
            scaleLabels={['弱い', '伸びる', '強すぎ']}
            valueLabel={(value) => `${Math.round(value)}% SPEED`}
            onValueChange={setLivePower}
            onConfirm={(value: number) => {
              setPower(value);
              setStep('angle');
            }}
          />
        </S.HudPanel>
      )}

      {step === 'angle' && (
        <S.HudPanel as={motion.div} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}>
          <GaugeBar
            label="打ち上げ角"
            description="真上に近いほど高さが出る。90度を超えるとカードが暴れて失速しやすい。"
            marker={82}
            scaleLabels={['低い', '的付近', '立ちすぎ']}
            valueLabel={(value) => `${Math.round(value)}° LAUNCH`}
            onValueChange={setLiveAngle}
            onConfirm={(angle: number) => {
              onThrow(power, angle);
            }}
          />
        </S.HudPanel>
      )}
    </S.Screen>
  );
}
