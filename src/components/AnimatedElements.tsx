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
  background: linear-gradient(45deg, #c41e3a 0%, #8b0000 100%);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3em;
  font-weight: bold;
  border: 3px solid gold;
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
  background: linear-gradient(135deg, #1a5a1a 0%, #0d3d0d 100%);
  border-radius: 12px;
  border: 3px solid #d4af37;
  position: relative;
  overflow: hidden;
  box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.5);
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
  font-size: 2em;
  color: #4ade80;
  font-weight: bold;
  text-shadow: 0 0 10px rgba(74, 222, 128, 0.5);
`;

export const FailureMessage = styled(motion.div)`
  font-size: 2em;
  color: #ff6b6b;
  font-weight: bold;
  text-shadow: 0 0 10px rgba(255, 107, 107, 0.5);
`;
