import { motion } from 'framer-motion';
import type { GameResult } from '../types/game';
import * as S from '../styles/components';
import * as A from './AnimatedElements';

interface ThrowAnimationProps {
  result: GameResult;
  onAnimationComplete: () => void;
}

export function ThrowAnimation({ result, onAnimationComplete }: ThrowAnimationProps) {
  const cameraRise = Math.min(860, result.distance * 72);
  const driftX = (result.angle - 82) * 3.2;
  const maxRotation = 360 + result.power * 5;

  const particles = Array.from({ length: 10 }).map((_, i) => ({
    angle: (i / 10) * Math.PI * 2,
    distance: 54 + (i % 3) * 18,
  }));

  return (
    <A.GameFieldContainer>
      <A.RisingWorld
        initial={{ y: 0 }}
        animate={{ y: cameraRise }}
        transition={{ duration: 1.85, ease: 'easeOut' }}
      >
        <A.CloudLayer />
        <A.BuildingLayer />
        <A.TowerLayer />
      </A.RisingWorld>
      <A.HeightRuler>
        <span>東京タワー</span>
        <span>ビル屋上</span>
        <span>街灯</span>
      </A.HeightRuler>
      <A.PerspectiveTable />
      <A.TargetHalo>PEAK</A.TargetHalo>
      <A.LauncherBase />
      <A.VerticalTrail
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: [0, 1.4, 0.35], opacity: [0, 0.85, 0] }}
        transition={{ duration: 1.35, ease: 'easeOut' }}
      />

      <motion.div
        style={{
          position: 'absolute',
          left: '50%',
          bottom: '88px',
          width: 86,
          height: 128,
          padding: 7,
          marginLeft: '-43px',
          background: 'white',
          borderRadius: 10,
          boxShadow: '0 16px 28px rgba(0, 0, 0, 0.36)',
        }}
        initial={{
          x: 0,
          y: 0,
          rotate: -30,
          scale: 0.9,
          opacity: 1,
        }}
        animate={{
          x: [0, -22, driftX * 0.34, driftX],
          y: [0, -120, -250, -300],
          rotate: [-30, 18, maxRotation * 0.62, maxRotation],
          scale: [1.08, 0.96, 0.72, 0.56],
          opacity: result.success ? 1 : 0.5,
        }}
        transition={{
          duration: 1.75,
          times: [0, 0.25, 0.72, 1],
          ease: ['easeOut', 'easeOut', 'easeIn'],
        }}
        onAnimationComplete={onAnimationComplete}
      >
        <A.CardBackContent>♠♥♦♣</A.CardBackContent>
      </motion.div>

      <A.LandingSpot
        style={{
          left: `calc(50% + ${driftX}px)`,
          top: '70px',
          marginLeft: '-30px',
          marginTop: '-30px',
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 1.18, 1], opacity: 1 }}
        transition={{ delay: 1.15, duration: 0.35 }}
      >
        {result.distance}m
      </A.LandingSpot>

      {result.success && (
        <>
          {particles.map((p, i) => (
            <A.ParticleEffect
              key={i}
              style={{
                left: `calc(50% + ${driftX}px)`,
                top: '96px',
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
                delay: 1.2,
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
            TARGET CLEAR
          </A.SuccessMessage>
        ) : (
          <A.FailureMessage
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            WOBBLED
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
          <p>リリース速度: {Math.round(result.power)}%</p>
          <p>打ち上げ角: {Math.round(result.angle)}°</p>
        </motion.div>
      </S.ResultBox>
    </motion.div>
  );
}
