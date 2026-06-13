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
    linear-gradient(45deg, rgba(255,255,255,.08) 25%, transparent 25% 50%, rgba(255,255,255,.08) 50% 75%, transparent 75%),
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
  height: 520px;
  background:
    linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px),
    linear-gradient(0deg, rgba(255,255,255,.05) 1px, transparent 1px),
    radial-gradient(circle at 50% 12%, rgba(255, 215, 0, .28), transparent 22%),
    linear-gradient(180deg, #0b2535 0%, #0f172a 62%, #16130d 100%);
  background-size: 48px 48px, 48px 48px, auto, auto;
  border-radius: 18px;
  border: 1px solid rgba(255, 215, 0, .45);
  position: relative;
  overflow: hidden;
  box-shadow: inset 0 0 40px rgba(0, 0, 0, 0.46), 0 24px 60px rgba(0, 0, 0, .3);
  margin: 30px auto;
`;

export const HeightRuler = styled.div`
  position: absolute;
  left: 18px;
  top: 42px;
  bottom: 78px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: rgba(255, 255, 255, .68);
  font-size: .82em;

  span {
    position: relative;
    padding-left: 28px;
  }

  span::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    width: 20px;
    height: 1px;
    background: rgba(255, 255, 255, .45);
  }
`;

export const TargetHalo = styled.div`
  position: absolute;
  left: 50%;
  top: 54px;
  width: 126px;
  height: 126px;
  transform: translateX(-50%);
  border-radius: 50%;
  border: 2px solid rgba(255, 215, 0, .78);
  box-shadow: 0 0 28px rgba(255, 215, 0, .36), inset 0 0 26px rgba(255, 215, 0, .18);
`;

export const LauncherBase = styled.div`
  position: absolute;
  left: 50%;
  bottom: 18px;
  width: 170px;
  height: 34px;
  transform: translateX(-50%);
  border-radius: 999px;
  background: rgba(0, 0, 0, .28);
  border: 1px solid rgba(255, 215, 0, .3);
`;

export const VerticalTrail = styled(motion.div)`
  position: absolute;
  left: 50%;
  bottom: 48px;
  width: 12px;
  height: 330px;
  transform-origin: bottom center;
  border-radius: 999px;
  background: linear-gradient(180deg, rgba(255,255,255,0), rgba(255,215,0,.9), rgba(255,255,255,0));
  filter: blur(.3px);
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
  letter-spacing: .08em;
  text-shadow: 0 0 10px rgba(74, 222, 128, 0.5);
`;

export const FailureMessage = styled(motion.div)`
  font-size: 1.4em;
  color: #ff6b6b;
  font-weight: bold;
  letter-spacing: .08em;
  text-shadow: 0 0 10px rgba(255, 107, 107, 0.5);
`;
