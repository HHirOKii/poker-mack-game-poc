import { useState } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
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
  const [liveAngle, setLiveAngle] = useState(50);

  const cardVariants: Variants = {
    ready: {
      y: 0,
      rotate: 0,
    },
    hover: {
      y: -10,
      rotate: 5,
    },
  };

  const throwingCardVariants: Variants = {
    ready: {
      x: [-28, -72, -28],
      y: [58, 22, 58],
      rotate: [-18, -44, -18],
      transition: {
        duration: 1.25,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  const armVariants: Variants = {
    ready: {
      rotate: [-22, -55, -22],
      transition: {
        duration: 1.25,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  const messageVariants: Variants = {
    initial: { opacity: 0, y: -20 },
    animate: {
      opacity: 1,
      y: 0,
    },
  };

  const renderChargeVisualizer = (mode: 'power' | 'angle', value: number) => {
    const pullBack = mode === 'power' ? value * 0.82 : power * 0.55;
    const wristAngle = mode === 'angle' ? value * 0.72 : 16;
    const glow = mode === 'power' ? value / 100 : Math.max(0.25, power / 100);

    return (
      <S.ChargeVisualizer>
        <S.ChargeLabel>
          {mode === 'power' ? '今ためている場所: 腕の引きと弾く力' : '今ためている場所: 手首とカードのリリース角'}
        </S.ChargeLabel>
        <S.ThrowStance style={{ height: 210, marginBottom: 6 }}>
          <S.ChargeArc style={{ opacity: glow, transform: `rotate(${-18 - pullBack / 12}deg)` }} />
          <S.ThrowBody />
          <S.ThrowArm
            as={motion.div}
            animate={{
              rotate: -18 - pullBack / 2.2,
              x: -pullBack / 3,
            }}
            transition={{ duration: 0.08 }}
          />
          <S.Card
            as={motion.div}
            animate={{
              x: -pullBack,
              y: 46 - pullBack / 2.6,
              rotate: -18 - wristAngle,
              scale: 0.82 + glow * 0.18,
            }}
            transition={{ duration: 0.08 }}
            style={{
              position: 'absolute',
              right: 54,
              top: 18,
              margin: 0,
              width: 86,
              height: 128,
              padding: 7,
              boxShadow: `0 0 ${16 + value / 2}px rgba(255, 215, 0, ${0.2 + glow * 0.45})`,
            }}
          >
            <S.CardBack>♠♥♦♣</S.CardBack>
          </S.Card>
          <S.PowerStream style={{ width: `${60 + value * 1.8}px`, opacity: 0.25 + glow * 0.65 }} />
        </S.ThrowStance>
        <S.ChargeReadout>
          <span>{mode === 'power' ? '腕の引き' : 'カードの傾き'}</span>
          <strong>{Math.round(value)}{mode === 'power' ? '%' : '°'}</strong>
        </S.ChargeReadout>
      </S.ChargeVisualizer>
    );
  };

  return (
    <S.Screen>
      <S.Subtitle>ゲーム画面</S.Subtitle>

      {step === 'ready' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            variants={messageVariants}
            initial="initial"
            animate="animate"
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatDelay: 0.3,
            }}
            style={{ marginBottom: '20px' }}
          >
            <S.Message>フォールドしろ！！</S.Message>
          </motion.div>

          <motion.div
            whileHover="hover"
            variants={cardVariants}
            initial="ready"
            transition={{ type: 'spring', stiffness: 100 }}
            style={{ cursor: 'pointer' }}
          >
            <S.ThrowStance>
              <S.ThrowCue />
              <S.ThrowBody />
              <S.ThrowArm
                as={motion.div}
                variants={armVariants}
                animate="ready"
              />
              <S.Card
                as={motion.div}
                variants={throwingCardVariants}
                animate="ready"
                style={{
                  position: 'absolute',
                  right: 54,
                  top: 18,
                  margin: 0,
                  width: 86,
                  height: 128,
                  padding: 7,
                }}
              >
                <S.CardBack>♠♥♦♣</S.CardBack>
              </S.Card>
            </S.ThrowStance>
          </motion.div>

          <S.ThrowHint>カードを引いて、手首で弾くタイミングを合わせる</S.ThrowHint>
          {hand && (
            <p style={{ color: '#cbd5e1', margin: '0 0 18px' }}>
              現在の手札: {hand.ranks[0]}{hand.suits[0]} / {hand.ranks[1]}{hand.suits[1]}
            </p>
          )}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <S.Button
              onClick={() => setStep('power')}
              style={{ fontSize: '1.2em' }}
            >
              マックでフォールド！
            </S.Button>
          </motion.div>
        </motion.div>
      )}

      {step === 'power' && (
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          {renderChargeVisualizer('power', livePower)}
          <p style={{ fontSize: '1.1em', marginBottom: '20px' }}>
            パワーゲージを止める:
          </p>
          <GaugeBar
            label="ためているもの: 投げる力"
            description="右へ伸びるほどカードを強く弾く。白い目印付近で止めると飛距離を出しやすい。"
            valueLabel={(value) => `${Math.round(value)}% チャージ`}
            onValueChange={setLivePower}
            onConfirm={(value: number) => {
              setPower(value);
              setStep('angle');
            }}
          />
        </motion.div>
      )}

      {step === 'angle' && (
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          {renderChargeVisualizer('angle', liveAngle)}
          <p style={{ fontSize: '1.1em', marginBottom: '20px' }}>
            リリース角度を止める:
          </p>
          <GaugeBar
            label="ためているもの: 手首の起こし角"
            description="数値が大きいほどカードが立ち、表返りやすい。低めで止めると水平に滑る。"
            valueLabel={(value) => `${Math.round(value)}°`}
            onValueChange={setLiveAngle}
            onConfirm={(angle: number) => {
              onThrow(power, angle);
            }}
          />
        </motion.div>
      )}
    </S.Screen>
  );
}
