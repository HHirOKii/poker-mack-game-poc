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

export function EnhancedGameScreen({ hand: _hand, onThrow }: EnhancedGameScreenProps) {
  const [step, setStep] = useState<'ready' | 'power' | 'angle'>('ready');
  const [power, setPower] = useState(50);

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

  const messageVariants: Variants = {
    initial: { opacity: 0, y: -20 },
    animate: {
      opacity: 1,
      y: 0,
    },
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
            <S.Card>
              <S.CardBack>♠♥♦♣</S.CardBack>
            </S.Card>
          </motion.div>

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
          <p style={{ fontSize: '1.1em', marginBottom: '20px' }}>
            投げる力を選択:
          </p>
          <GaugeBar
            label="投げの強さ"
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
          <p style={{ fontSize: '1.1em', marginBottom: '20px' }}>
            ハンドの角度を選択:
          </p>
          <p style={{ fontSize: '0.9em', color: '#ffd700', marginBottom: '20px' }}>
            水平に近いほど成功しやすい
          </p>
          <GaugeBar
            label="回転角度"
            onConfirm={(angle: number) => {
              onThrow(power, angle);
            }}
          />
        </motion.div>
      )}
    </S.Screen>
  );
}
