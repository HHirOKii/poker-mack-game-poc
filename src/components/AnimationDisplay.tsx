import { motion } from 'framer-motion';
import type { GameResult } from '../types/game';
import * as S from '../styles/components';
import * as A from './AnimatedElements';

interface ThrowAnimationProps {
  result: GameResult;
  onAnimationComplete: () => void;
}

export function ThrowAnimation({ result, onAnimationComplete }: ThrowAnimationProps) {
  const landingX = Math.min(result.distance * 58, 560);
  const arcHeight = 130 + result.power * 0.7;
  const driftY = (result.angle - 45) * 0.55;
  const maxRotation = 540 + 540 * (result.distance / 9);

  const particles = Array.from({ length: 12 }).map((_, i) => ({
    angle: (i / 12) * Math.PI * 2,
    distance: 60 + (i % 3) * 22,
  }));

  const trails = Array.from({ length: 4 }).map((_, i) => ({
    delay: i * 0.05,
    opacity: 0.28 - i * 0.05,
  }));

  return (
    <A.GameFieldContainer>
      <A.ThrowerMark>
        <A.ThrowerArm />
      </A.ThrowerMark>

      <A.PowerWake
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: [0, 1, 0.55], opacity: [0, 0.9, 0] }}
        transition={{ duration: 0.45, delay: 0.35 }}
      />

      {trails.map((trail, i) => (
        <A.CardTrail
          key={i}
          style={{
            left: '50%',
            top: '50%',
            marginLeft: '-36px',
            marginTop: '-54px',
          }}
          initial={{
            x: -80,
            y: 24,
            rotate: -38,
            opacity: 0,
          }}
          animate={{
            x: [-80, landingX * 0.35, landingX * 0.74],
            y: [24, -arcHeight * 0.55, -arcHeight * 0.18 + driftY],
            rotate: [-38, 170, maxRotation * 0.72],
            opacity: [0, trail.opacity, 0],
          }}
          transition={{
            duration: 1.25,
            delay: 0.22 + trail.delay,
            ease: 'easeOut',
          }}
        />
      ))}

      {/* 投げるカード */}
      <motion.div
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          marginLeft: '-48px',
          marginTop: '-72px',
          width: 96,
          height: 144,
          padding: 8,
          background: 'white',
          borderRadius: 12,
          boxShadow: '0 14px 30px rgba(0, 0, 0, 0.35)',
        }}
        initial={{
          x: -96,
          y: 30,
          rotate: -42,
          scale: 0.92,
          opacity: 1,
        }}
        animate={{
          x: [-96, -132, 0, landingX * 0.48, landingX],
          y: [30, 12, -62, -arcHeight, -18 + driftY],
          rotate: [-42, -64, 18, maxRotation * 0.45, maxRotation],
          scale: [0.92, 0.86, 1.06, 0.96, 0.9],
          opacity: result.success ? 1 : 0.5,
        }}
        transition={{
          duration: 1.7,
          times: [0, 0.22, 0.36, 0.72, 1],
          ease: ['easeInOut', 'easeOut', 'easeOut', 'easeIn'],
        }}
        onAnimationComplete={onAnimationComplete}
      >
        <A.CardBackContent>♠♥♦♣</A.CardBackContent>
      </motion.div>

      {/* 着地地点表示 */}
      <A.LandingSpot
        style={{
          left: `calc(50% + ${landingX}px)`,
          top: `calc(50% + ${-18 + driftY}px)`,
          marginLeft: '-30px',
          marginTop: '-30px',
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 1.2, 1], opacity: 1 }}
        transition={{ delay: 1.25, duration: 0.35 }}
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
                top: `calc(50% + ${-18 + driftY}px)`,
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
                delay: 1.35,
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
