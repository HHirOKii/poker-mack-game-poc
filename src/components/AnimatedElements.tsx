import { motion } from 'framer-motion';
import styled from 'styled-components';

export const AnimatedCard = styled(motion.div)`
  width: 120px;
  height: 180px;
  background: white;
  border-radius: 12px;
  padding: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
`;

export const CardBackContent = styled.div`
  width: 100%;
  height: 100%;
  background:
    linear-gradient(45deg, rgba(255, 255, 255, 0.08) 25%, transparent 25% 50%, rgba(255, 255, 255, 0.08) 50% 75%, transparent 75%),
    linear-gradient(135deg, #b91c1c 0%, #450a0a 100%);
  background-size: 18px 18px, auto;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3em;
  font-weight: bold;
  border: 3px solid gold;
`;

export const CardTrail = styled(motion.div)`
  position: absolute;
  width: 72px;
  height: 108px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.45);
  border: 2px solid rgba(255, 215, 0, 0.55);
  filter: blur(1px);
  pointer-events: none;
`;

export const PowerWake = styled(motion.div)`
  position: absolute;
  left: 18%;
  top: 52%;
  width: 220px;
  height: 6px;
  border-radius: 999px;
  background: linear-gradient(90deg, rgba(255, 215, 0, 0), #ffd700, rgba(255, 255, 255, 0));
  transform-origin: left center;
  pointer-events: none;
`;

export const ThrowerMark = styled.div`
  position: absolute;
  left: 56px;
  bottom: 42px;
  width: 58px;
  height: 86px;
  border-radius: 28px 28px 12px 12px;
  background: linear-gradient(180deg, #facc15 0%, #92400e 100%);
  box-shadow: 0 10px 18px rgba(0, 0, 0, 0.35);

  &::before {
    content: '';
    position: absolute;
    left: 14px;
    top: -34px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #f8d1a7;
    border: 2px solid #7c2d12;
  }
`;

export const ThrowerArm = styled.div`
  position: absolute;
  right: -42px;
  top: 20px;
  width: 78px;
  height: 12px;
  border-radius: 999px;
  background: #f8d1a7;
  transform: rotate(-24deg);
  transform-origin: left center;
`;

export const LandingSpot = styled(motion.div)`
  width: 60px;
  height: 60px;
  border: 3px solid #ffd700;
  border-radius: 50%;
  background: rgba(255, 215, 0, 0.2);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #ffd700;
`;

export const GameFieldContainer = styled.div`
  width: 100%;
  max-width: 800px;
  height: 400px;
  background:
    radial-gradient(ellipse at center, rgba(34, 197, 94, 0.18), transparent 58%),
    repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.025) 0 1px, transparent 1px 34px),
    linear-gradient(135deg, #0f513c 0%, #082f2a 100%);
  border-radius: 18px;
  border: 1px solid rgba(255, 215, 0, 0.42);
  position: relative;
  overflow: hidden;
  box-shadow:
    inset 0 0 40px rgba(0, 0, 0, 0.42),
    0 24px 60px rgba(0, 0, 0, 0.32);
  margin: 30px auto;
`;

export const ParticleEffect = styled(motion.div)`
  position: absolute;
  width: 12px;
  height: 12px;
  background: #ffd700;
  border-radius: 50%;
  pointer-events: none;
`;

export const SuccessMessage = styled(motion.div)`
  font-size: 1.4em;
  color: #4ade80;
  font-weight: bold;
  letter-spacing: 0.08em;
  text-shadow: 0 0 10px rgba(74, 222, 128, 0.5);
`;

export const FailureMessage = styled(motion.div)`
  font-size: 1.4em;
  color: #ff6b6b;
  font-weight: bold;
  letter-spacing: 0.08em;
  text-shadow: 0 0 10px rgba(255, 107, 107, 0.5);
`;
