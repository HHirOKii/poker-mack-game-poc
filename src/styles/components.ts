import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Arial', sans-serif;
  background: linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%);
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
  max-width: 600px;
  padding: 40px;
  text-align: center;
  color: white;
  box-sizing: border-box;

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
  background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
  color: #000;
  border: none;
  padding: 15px 30px;
  font-size: 1.1em;
  border-radius: 8px;
  cursor: pointer;
  margin: 10px;
  font-weight: bold;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 4px 15px rgba(255, 215, 0, 0.3);

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
  border-radius: 12px;
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
  margin: 30px 0;
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
  height: 40px;
  background: #333;
  border-radius: 20px;
  overflow: hidden;
  border: 2px solid #ffd700;
  position: relative;
`;

export const GaugeFill = styled.div<{ percentage: number }>`
  height: 100%;
  width: ${(props) => props.percentage}%;
  background: linear-gradient(90deg, #ff6b6b 0%, #ffd700 50%, #4ade80 100%);
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
