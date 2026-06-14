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
    radial-gradient(circle at 50% 10%, rgba(255,255,255,.82), transparent 14%),
    linear-gradient(180deg, #8bd3ff 0%, #dff7ff 34%, #fef3c7 68%, #5b3414 100%);
  border-radius: 18px;
  border: 1px solid rgba(255, 215, 0, .45);
  position: relative;
  overflow: hidden;
  box-shadow: inset 0 0 40px rgba(0, 0, 0, 0.46), 0 24px 60px rgba(0, 0, 0, .3);
  margin: 30px auto;
`;

export const RisingWorld = styled(motion.div)`
  position: absolute;
  left: 0;
  right: 0;
  top: -880px;
  height: 1380px;
  pointer-events: none;
`;

export const CloudLayer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 120px;
  height: 360px;
  background:
    radial-gradient(ellipse at 18% 32%, rgba(255,255,255,.9) 0 34px, transparent 35px),
    radial-gradient(ellipse at 28% 38%, rgba(255,255,255,.76) 0 46px, transparent 47px),
    radial-gradient(ellipse at 74% 22%, rgba(255,255,255,.86) 0 40px, transparent 41px),
    radial-gradient(ellipse at 84% 30%, rgba(255,255,255,.68) 0 54px, transparent 55px);
`;

export const BuildingLayer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 210px;
  height: 360px;
  background:
    linear-gradient(90deg, transparent 0 5%, #1f2937 5% 14%, transparent 14% 19%, #334155 19% 31%, transparent 31% 37%, #0f172a 37% 50%, transparent 50% 57%, #475569 57% 72%, transparent 72% 78%, #1e293b 78% 92%, transparent 92%);
  clip-path: polygon(0 68%, 5% 68%, 5% 22%, 14% 22%, 14% 75%, 19% 75%, 19% 8%, 31% 8%, 31% 70%, 37% 70%, 37% 0, 50% 0, 50% 78%, 57% 78%, 57% 30%, 72% 30%, 72% 72%, 78% 72%, 78% 14%, 92% 14%, 92% 68%, 100% 68%, 100% 100%, 0 100%);
  opacity: .82;
`;

export const TowerLayer = styled.div`
  position: absolute;
  left: 58%;
  top: 40px;
  width: 84px;
  height: 520px;
  transform: translateX(-50%);
  background:
    linear-gradient(115deg, transparent 0 43%, #ef4444 43% 47%, transparent 47% 53%, #ef4444 53% 57%, transparent 57%),
    linear-gradient(90deg, transparent 0 42%, #f8fafc 42% 58%, transparent 58%);
  clip-path: polygon(48% 0, 56% 0, 72% 100%, 30% 100%);
  opacity: .9;
`;

export const PerspectiveTable = styled.div`
  position: absolute;
  left: 50%;
  bottom: -18px;
  width: 84%;
  height: 190px;
  transform: translateX(-50%) perspective(360px) rotateX(58deg);
  transform-origin: bottom center;
  background:
    linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px),
    linear-gradient(0deg, rgba(255,255,255,.09) 1px, transparent 1px),
    linear-gradient(135deg, #0f6b48 0%, #064e3b 100%);
  background-size: 46px 46px, 46px 46px, auto;
  border: 8px solid #7c2d12;
  box-shadow: 0 -16px 34px rgba(0,0,0,.28);
`;

export const HeightRuler = styled.div`
  position: absolute;
  left: 18px;
  top: 42px;
  bottom: 78px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: rgba(15, 23, 42, .72);
  font-size: .82em;
  font-weight: 800;

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
  top: 44px;
  width: 126px;
  height: 126px;
  transform: translateX(-50%);
  border-radius: 50%;
  border: 3px solid rgba(239, 68, 68, .82);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #7f1d1d;
  font-weight: 900;
  font-size: .78em;
  background: rgba(255,255,255,.28);
  box-shadow: 0 0 28px rgba(239, 68, 68, .28), inset 0 0 26px rgba(255, 255, 255, .22);
`;

export const LauncherBase = styled.div`
  position: absolute;
  left: 50%;
  bottom: 58px;
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
