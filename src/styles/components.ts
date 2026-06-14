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
  max-width: 900px;
  padding: 28px;
  text-align: center;
  color: white;
  box-sizing: border-box;
  background: rgba(7, 18, 27, .42);
  border: 1px solid rgba(255, 215, 0, .14);
  border-radius: 14px;
  box-shadow: 0 18px 48px rgba(0, 0, 0, .28);

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
  height: 430px;
  border-radius: 10px;
  overflow: hidden;
  background:
    radial-gradient(circle at 50% 10%, rgba(255,255,255,.75), transparent 13%),
    linear-gradient(180deg, #7dd3fc 0%, #e0f2fe 34%, #fef3c7 68%, #6b3f16 100%);
  border: 1px solid rgba(255, 215, 0, .34);
  box-shadow: inset 0 -60px 0 rgba(84, 48, 16, .28), 0 16px 40px rgba(0, 0, 0, .3);
`;

export const PixelSkyline = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 130px;
  height: 150px;
  background:
    linear-gradient(90deg, transparent 0 6%, rgba(8, 47, 73, .3) 6% 14%, transparent 14% 18%, rgba(8, 47, 73, .22) 18% 26%, transparent 26% 34%, rgba(8, 47, 73, .3) 34% 46%, transparent 46% 55%, rgba(8, 47, 73, .2) 55% 70%, transparent 70% 78%, rgba(8, 47, 73, .28) 78% 90%, transparent 90%);
  clip-path: polygon(0 55%, 8% 55%, 8% 24%, 16% 24%, 16% 66%, 28% 66%, 28% 38%, 40% 38%, 40% 60%, 53% 60%, 53% 30%, 66% 30%, 66% 68%, 79% 68%, 79% 42%, 91% 42%, 91% 58%, 100% 58%, 100% 100%, 0 100%);
  pointer-events: none;
`;

export const TablePlane = styled.div`
  position: absolute;
  left: 50%;
  bottom: -26px;
  width: 88%;
  height: 210px;
  transform: translateX(-50%) perspective(420px) rotateX(58deg);
  transform-origin: bottom center;
  background:
    linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px),
    linear-gradient(0deg, rgba(255,255,255,.09) 1px, transparent 1px),
    linear-gradient(135deg, #0f6b48 0%, #065f46 100%);
  background-size: 44px 44px, 44px 44px, auto;
  border: 8px solid #7c2d12;
  box-shadow: 0 -16px 34px rgba(0,0,0,.25);
`;

export const TableEdge = styled.div`
  position: absolute;
  left: 7%;
  right: 7%;
  bottom: 52px;
  height: 18px;
  border-radius: 999px;
  background: linear-gradient(180deg, #92400e, #451a03);
  box-shadow: 0 12px 18px rgba(0,0,0,.24);
`;

export const HeightMarks = styled.div`
  position: absolute;
  left: 18px;
  top: 36px;
  bottom: 96px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: rgba(7, 18, 27, .7);
  font-size: .76em;
  font-weight: 800;
`;

export const TargetRing = styled.div`
  position: absolute;
  right: 16%;
  top: 44px;
  width: 104px;
  height: 104px;
  border-radius: 50%;
  border: 5px solid #ef4444;
  background: radial-gradient(circle, #fff 0 18%, #ef4444 18% 31%, #fff 31% 47%, #2563eb 47% 62%, rgba(255,255,255,.72) 62%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #111827;
  font-size: .78em;
  font-weight: 800;
  letter-spacing: .08em;
  box-shadow: 0 10px 0 rgba(0,0,0,.18), 0 0 22px rgba(255, 255, 255, .4);
`;

export const TargetPlatform = styled.div`
  position: absolute;
  right: calc(16% + 44px);
  top: 148px;
  width: 16px;
  height: 110px;
  background: #7c2d12;
  border-left: 4px solid rgba(255,255,255,.18);
  box-shadow: 0 8px 0 rgba(0,0,0,.2);
`;

export const GroundLine = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 74px;
  background:
    linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px),
    linear-gradient(180deg, #2f7d32 0%, #166534 42%, #7c2d12 42%, #4a1d0b 100%);
  background-size: 34px 100%, auto;
  border-top: 4px solid #86efac;
`;

export const UnderhandPlayer = styled.div`
  position: absolute;
  left: 15%;
  bottom: 80px;
  width: 280px;
  height: 190px;
`;

export const PlayerShadow = styled.div`
  position: absolute;
  left: 16px;
  bottom: -8px;
  width: 190px;
  height: 22px;
  border-radius: 50%;
  background: rgba(0, 0, 0, .22);
`;

export const PlayerBody = styled.div`
  position: absolute;
  left: 78px;
  bottom: 0;
  width: 76px;
  height: 104px;
  border-radius: 30px 30px 12px 12px;
  background: linear-gradient(180deg, #2563eb 0%, #1e40af 100%);
  box-shadow: 8px 0 0 rgba(0,0,0,.12), 0 14px 0 rgba(0, 0, 0, .14);

  &::before {
    content: '';
    position: absolute;
    left: 52px;
    top: -46px;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    background: #f8d1a7;
    border: 3px solid #7c2d12;
    box-shadow: -9px 9px 0 rgba(0,0,0,.12);
  }

  &::after {
    content: '';
    position: absolute;
    left: 16px;
    bottom: -44px;
    width: 18px;
    height: 52px;
    border-radius: 999px;
    background: #111827;
    box-shadow: 44px 0 0 #111827;
  }
`;

export const PlayerArm = styled.div`
  position: absolute;
  left: 112px;
  bottom: 78px;
  width: 136px;
  height: 16px;
  border-radius: 999px;
  background: #f8d1a7;
  transform-origin: 8px 50%;
  box-shadow: 0 5px 0 rgba(0, 0, 0, .14);
`;

export const LiftBeam = styled.div`
  position: absolute;
  left: 188px;
  bottom: 58px;
  width: 7px;
  transform-origin: bottom center;
  border-radius: 999px;
  background: linear-gradient(180deg, rgba(255,255,255,0), rgba(239,68,68,.74), rgba(255,255,255,0));
  pointer-events: none;
`;

export const HudPanel = styled.div`
  margin-top: 14px;
  padding: 14px 16px 16px;
  border-radius: 10px;
  background: rgba(2, 6, 23, .58);
  border: 1px solid rgba(255, 255, 255, .12);
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
