import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Arial', sans-serif;
  background:
    radial-gradient(circle at 50% 8%, rgba(255, 215, 0, 0.18), transparent 28%),
    radial-gradient(circle at 18% 82%, rgba(220, 38, 38, 0.18), transparent 24%),
    linear-gradient(135deg, #073b2f 0%, #0b1f24 58%, #141016 100%);
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
  background: rgba(6, 18, 22, 0.72);
  border: 1px solid rgba(255, 215, 0, 0.22);
  border-radius: 18px;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.36);
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
  letter-spacing: 0;
  text-shadow: 0 4px 18px rgba(0, 0, 0, 0.45);
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
  box-shadow: 0 10px 24px rgba(249, 115, 22, 0.24);

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
  color: #e0e0e0;
  font-size: 0.95em;
  line-height: 1.5;
`;

export const GaugeBar = styled.div`
  width: 100%;
  height: 34px;
  background: rgba(6, 18, 22, 0.9);
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid rgba(255, 215, 0, 0.65);
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
  height: 52px;
  background: white;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.7);
`;

export const GaugeScale = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  color: #cbd5e1;
  font-size: 0.8em;
`;

export const GaugeValue = styled.p`
  margin: 12px 0 0;
  font-size: 1.2em;
  color: #4ade80;
  font-weight: bold;
`;

export const ThrowStance = styled.div`
  position: relative;
  width: min(100%, 360px);
  height: 230px;
  margin: 10px auto 18px;
`;

export const ChargeVisualizer = styled.div`
  margin: 0 auto 22px;
  padding: 18px 18px 14px;
  border: 1px solid rgba(255, 215, 0, 0.22);
  border-radius: 14px;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.02)),
    rgba(7, 33, 30, 0.58);
`;

export const ChargeLabel = styled.p`
  margin: 0 0 10px;
  color: #ffd700;
  font-size: 0.95em;
  font-weight: bold;
`;

export const ChargeArc = styled.div`
  position: absolute;
  left: 22px;
  top: 28px;
  width: 230px;
  height: 112px;
  border-top: 5px solid rgba(255, 215, 0, 0.88);
  border-radius: 50%;
  transform-origin: 72% 70%;
  box-shadow: 0 -8px 18px rgba(255, 215, 0, 0.25);
`;

export const PowerStream = styled.div`
  position: absolute;
  right: 82px;
  top: 88px;
  height: 12px;
  border-radius: 999px;
  background: linear-gradient(90deg, rgba(255, 215, 0, 0), rgba(255, 215, 0, 0.88));
  transform: rotate(-16deg);
  transform-origin: right center;
  filter: blur(0.3px);
`;

export const ChargeReadout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding-top: 10px;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  color: #cbd5e1;

  strong {
    color: #4ade80;
    font-size: 1.35em;
  }
`;

export const ThrowBody = styled.div`
  position: absolute;
  left: 50%;
  bottom: 10px;
  width: 88px;
  height: 118px;
  transform: translateX(-50%);
  border-radius: 42px 42px 18px 18px;
  background: linear-gradient(180deg, #facc15 0%, #b45309 100%);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.35);

  &::before {
    content: '';
    position: absolute;
    left: 19px;
    top: -54px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #f8d1a7;
    border: 3px solid #7c2d12;
  }
`;

export const ThrowArm = styled.div`
  position: absolute;
  left: 50%;
  top: 74px;
  width: 150px;
  height: 18px;
  border-radius: 999px;
  background: #f8d1a7;
  transform-origin: 8px 50%;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.25);
`;

export const ThrowCue = styled.div`
  position: absolute;
  left: 40px;
  top: 22px;
  width: 210px;
  height: 84px;
  border-top: 3px dashed rgba(255, 215, 0, 0.75);
  border-radius: 50%;
  transform: rotate(-16deg);
`;

export const ThrowHint = styled.p`
  color: #e0e0e0;
  font-size: 0.95em;
  margin: 0 0 18px;
`;

export const ResultBox = styled.div`
  background: rgba(7, 33, 30, 0.86);
  border: 1px solid rgba(255, 215, 0, 0.45);
  border-radius: 14px;
  padding: 30px;
  margin: 20px 0;
  font-size: 1.3em;
`;

export const ResultModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: rgba(0, 0, 0, 0.42);
  backdrop-filter: blur(3px);
  box-sizing: border-box;
`;

export const ResultModal = styled.div`
  width: min(100%, 440px);
  color: white;
  text-align: center;
  border-radius: 18px;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02)),
    rgba(6, 18, 22, 0.95);
  border: 1px solid rgba(255, 215, 0, 0.36);
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.55);
  padding: 18px;
  box-sizing: border-box;
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
