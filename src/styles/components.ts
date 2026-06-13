import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Arial', sans-serif;
  background:
    radial-gradient(circle at 50% 8%, rgba(255, 215, 0, 0.18), transparent 26%),
    radial-gradient(circle at 18% 78%, rgba(220, 38, 38, 0.16), transparent 24%),
    linear-gradient(135deg, #071923 0%, #111827 58%, #17120f 100%);
  padding: 20px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

export const Screen = styled.div`
  width: 100%;
  max-width: 760px;
  padding: 40px;
  text-align: center;
  color: white;
  box-sizing: border-box;
  background: rgba(7, 18, 27, .74);
  border: 1px solid rgba(255, 215, 0, .18);
  border-radius: 18px;
  box-shadow: 0 24px 70px rgba(0, 0, 0, .36);
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    padding: 30px;
  }

  @media (max-width: 480px) {
    padding: 20px;
  }
`;

export const Title = styled.h1`
  font-size: 3em;
  margin: 20px 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  color: #ffd700;
`;

export const Subtitle = styled.h2`
  font-size: 1.5em;
  margin: 20px 0;
  color: #e0e0e0;
`;

export const Button = styled.button`
  background: linear-gradient(135deg, #f8c537 0%, #f97316 100%);
  color: #170f05;
  border: none;
  padding: 15px 30px;
  font-size: 1.1em;
  border-radius: 8px;
  cursor: pointer;
  margin: 10px;
  font-weight: bold;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 10px 24px rgba(249, 115, 22, .24);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(255, 215, 0, 0.5);
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 4px 10px rgba(255, 215, 0, 0.3);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: 480px) {
    padding: 12px 24px;
    font-size: 1em;
    margin: 8px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 30px;
`;

export const Card = styled.div<{ rotate?: number }>`
  width: 120px;
  height: 180px;
  background: white;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px auto;
  transform: ${(props) => (props.rotate ? `rotateZ(${props.rotate}deg)` : 'none')};
  transition: transform 0.3s;
`;

export const CardBack = styled.div`
  width: 100%;
  height: 100%;
  background:
    linear-gradient(45deg, rgba(255, 255, 255, .08) 25%, transparent 25% 50%, rgba(255, 255, 255, .08) 50% 75%, transparent 75%),
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

export const CardFront = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5em;
  font-weight: bold;
`;

export const GaugeContainer = styled.div`
  margin: 24px 0 0;
`;

export const GaugeLabel = styled.p`
  font-size: 1.2em;
  margin-bottom: 10px;
  color: #ffd700;
`;

export const GaugeDescription = styled.p`
  margin: -4px 0 14px;
  color: #cbd5e1;
  font-size: .95em;
  line-height: 1.5;
`;

export const GaugeBar = styled.div`
  width: 100%;
  height: 34px;
  background: rgba(6, 18, 22, .92);
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid rgba(255, 215, 0, .65);
  position: relative;
`;

export const GaugeFill = styled.div<{ $percentage: number }>`
  height: 100%;
  width: ${(props) => props.$percentage}%;
  background: linear-gradient(90deg, #ef4444 0%, #f59e0b 45%, #22c55e 100%);
  transition: width 0.05s linear;
`;

export const GaugeMarker = styled.div`
  position: absolute;
  top: -6px;
  width: 3px;
  height: 48px;
  background: white;
  box-shadow: 0 0 12px rgba(255, 255, 255, .75);
`;

export const GaugeScale = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  color: #94a3b8;
  font-size: .78em;
`;

export const GaugeValue = styled.p`
  margin: 12px 0 0;
  font-size: 1.12em;
  color: #4ade80;
  font-weight: bold;
  letter-spacing: .04em;
`;

export const GameHeader = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  align-items: baseline;
  margin-bottom: 18px;
  text-align: left;

  span {
    color: #f97316;
    font-size: .78em;
    font-weight: 800;
    letter-spacing: .12em;
  }

  strong {
    color: #f8fafc;
    font-size: 1.2em;
  }

  @media (max-width: 560px) {
    display: block;
    text-align: center;
  }
`;

export const HeightStage = styled.div`
  position: relative;
  height: 360px;
  border-radius: 18px;
  overflow: hidden;
  background:
    linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px),
    linear-gradient(0deg, rgba(255,255,255,.05) 1px, transparent 1px),
    radial-gradient(circle at 50% 12%, rgba(255, 215, 0, .22), transparent 22%),
    linear-gradient(180deg, #0b2535 0%, #0f172a 58%, #1c1309 100%);
  background-size: 44px 44px, 44px 44px, auto, auto;
  border: 1px solid rgba(255, 215, 0, .34);
  box-shadow: inset 0 0 38px rgba(0, 0, 0, .4);
`;

export const HeightMarks = styled.div`
  position: absolute;
  left: 16px;
  top: 32px;
  bottom: 64px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: rgba(255, 255, 255, .62);
  font-size: .76em;
`;

export const TargetRing = styled.div`
  position: absolute;
  left: 50%;
  top: 28px;
  width: 104px;
  height: 104px;
  transform: translateX(-50%);
  border-radius: 50%;
  border: 2px solid rgba(255, 215, 0, .82);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffd700;
  font-size: .78em;
  font-weight: 800;
  letter-spacing: .08em;
  box-shadow: 0 0 26px rgba(255, 215, 0, .28), inset 0 0 22px rgba(255, 215, 0, .16);
`;

export const UnderhandPlayer = styled.div`
  position: absolute;
  left: 50%;
  bottom: 28px;
  width: 280px;
  height: 180px;
  transform: translateX(-50%);
`;

export const PlayerBody = styled.div`
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 76px;
  height: 104px;
  transform: translateX(-50%);
  border-radius: 34px 34px 16px 16px;
  background: linear-gradient(180deg, #facc15 0%, #b45309 100%);
  box-shadow: 0 14px 26px rgba(0, 0, 0, .32);

  &::before {
    content: '';
    position: absolute;
    left: 17px;
    top: -46px;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    background: #f8d1a7;
    border: 3px solid #7c2d12;
  }
`;

export const PlayerArm = styled.div`
  position: absolute;
  left: 48%;
  bottom: 72px;
  width: 132px;
  height: 16px;
  border-radius: 999px;
  background: #f8d1a7;
  transform-origin: 8px 50%;
  box-shadow: 0 6px 12px rgba(0, 0, 0, .24);
`;

export const LiftBeam = styled.div`
  position: absolute;
  left: 50%;
  bottom: 38px;
  width: 10px;
  transform: translateX(-50%);
  border-radius: 999px;
  background: linear-gradient(180deg, rgba(255,255,255,0), rgba(255,215,0,.8), rgba(255,255,255,0));
  pointer-events: none;
`;

export const HandReadout = styled.p`
  margin: 12px 0 4px;
  color: #cbd5e1;
  font-size: .92em;
`;

export const ResultBox = styled.div`
  background: rgba(255, 215, 0, 0.1);
  border: 3px solid #ffd700;
  border-radius: 12px;
  padding: 30px;
  margin: 20px 0;
  font-size: 1.3em;
`;

export const ResultValue = styled.p`
  font-size: 2.5em;
  color: #ffd700;
  margin: 15px 0;
  font-weight: bold;
`;

export const RankingList = styled.div`
  background: rgba(0, 0, 0, 0.3);
  border-radius: 12px;
  padding: 20px;
  max-height: 400px;
  overflow-y: auto;
  text-align: left;
`;

export const RankingItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px;
  border-bottom: 1px solid #444;
  font-size: 1em;

  &:last-child {
    border-bottom: none;
  }
`;

export const RankingRank = styled.span`
  color: #ffd700;
  font-weight: bold;
  min-width: 30px;
`;

export const RankingName = styled.span`
  flex: 1;
  color: #e0e0e0;
`;

export const RankingDistance = styled.span`
  color: #4ade80;
  font-weight: bold;
`;

export const OptionGroup = styled.div`
  margin: 20px 0;
  text-align: left;
`;

export const OptionLabel = styled.label`
  display: block;
  color: #ffd700;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const OptionSelect = styled.select`
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  border: 2px solid #ffd700;
  background: #1e3a8a;
  color: white;
  font-size: 1em;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    box-shadow: 0 0 15px rgba(255, 215, 0, 0.4);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 20px #ffd700;
  }

  @media (max-width: 480px) {
    padding: 8px;
    font-size: 0.95em;
  }
`;

export const Message = styled.p`
  font-size: 1.3em;
  color: #ff6b6b;
  margin: 20px 0;
  animation: pulse 1s infinite;

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.6;
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: 2px solid #ffd700;
  background: #1e3a8a;
  color: white;
  font-size: 1em;
  margin: 10px 0;
  box-sizing: border-box;
  transition: all 0.2s ease;

  &::placeholder {
    color: #888;
  }

  &:hover {
    border-color: #ffed4e;
    box-shadow: 0 0 10px rgba(255, 215, 0, 0.3);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 15px #ffd700;
    border-color: #ffed4e;
  }

  @media (max-width: 480px) {
    padding: 10px;
    font-size: 0.95em;
  }
`;
