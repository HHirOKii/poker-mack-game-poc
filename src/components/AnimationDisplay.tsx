import { motion } from 'framer-motion';
import type { GameResult } from '../types/game';
import * as S from '../styles/components';
import * as A from './AnimatedElements';

interface ThrowAnimationProps {
  result: GameResult;
  onAnimationComplete: () => void;
}

export function ThrowAnimation({ result, onAnimationComplete }: ThrowAnimationProps) {
  const landingX = result.distance * 30;
  const maxRotation = 360 * (result.distance / 9);

  const particles = Array.from({ length: 8 }).map((_, i) => ({
    angle: (i / 8) * Math.PI * 2,
    distance: 80,
  }));

  return (
    <A.GameFieldContainer>
      {/* 投げるカード */}
      <motion.div
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          marginLeft: '-60px',
          marginTop: '-90px',
        }}
        initial={{
          x: 0,
          y: 0,
          rotate: 0,
          opacity: 1,
        }}
        animate={{
          x: landingX,
          y: -100 + Math.sin(landingX / 200) * 60,
          rotate: maxRotation,
          opacity: result.success ? 1 : 0.5,
        }}
        transition={{
          duration: 1.2,
          ease: 'easeOut',
        }}
        onAnimationComplete={onAnimationComplete}
      >
        <A.CardBackContent>♠♥♦♣</A.CardBackContent>
      </motion.div>

      {/* 着地地点表示 */}
      <A.LandingSpot
        style={{
          left: `${50 + (landingX / 800) * 100}%`,
          top: '50%',
          marginLeft: '-30px',
          marginTop: '-30px',
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        {result.distance}m
      </A.LandingSpot>

      {/* 成功/失敗パーティクル */}
      {result.success && (
        <>
          {particles.map((p, i) => (
            <A.ParticleEffect
              key={i}
              style={{
                left: `calc(50% + ${landingX}px)`,
                top: '50%',
              }}
              initial={{
                x: 0,
                y: 0,
                opacity: 1,
                scale: 1,
              }}
              animate={{
                x: Math.cos(p.angle) * p.distance,
                y: Math.sin(p.angle) * p.distance,
                opacity: 0,
                scale: 0,
              }}
              transition={{
                delay: 0.9,
                duration: 0.6,
              }}
            />
          ))}
        </>
      )}
    </A.GameFieldContainer>
  );
}

interface ResultAnimationProps {
  result: GameResult;
}

export function ResultAnimation({ result }: ResultAnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <S.ResultBox>
        {result.success ? (
          <A.SuccessMessage
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            🎉 成功！
          </A.SuccessMessage>
        ) : (
          <A.FailureMessage
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            💔 失敗...
          </A.FailureMessage>
        )}

        <S.ResultValue
          as={motion.div}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.4 }}
        >
          {result.distance}m
        </S.ResultValue>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <p>投げの強さ: {Math.round(result.power)}</p>
          <p>角度: {Math.round(result.angle)}°</p>
        </motion.div>
      </S.ResultBox>
    </motion.div>
  );
}
