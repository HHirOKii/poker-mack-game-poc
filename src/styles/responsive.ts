import styled from 'styled-components';

export const ResponsiveContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

export const EnhancedButton = styled.button`
  background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
  color: #000;
  border: none;
  padding: 15px 30px;
  font-size: 1.1em;
  border-radius: 8px;
  cursor: pointer;
  margin: 10px;
  font-weight: bold;
  transition: all 0.3s ease;
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

export const StatCard = styled.div`
  background: rgba(255, 215, 0, 0.05);
  border: 2px solid #ffd700;
  border-radius: 8px;
  padding: 15px;
  margin: 10px 0;
  text-align: center;

  h3 {
    color: #ffd700;
    margin: 0 0 8px 0;
    font-size: 0.9em;
  }

  p {
    font-size: 1.8em;
    color: #4ade80;
    margin: 0;
    font-weight: bold;
  }

  @media (max-width: 480px) {
    padding: 12px;
    margin: 8px 0;

    h3 {
      font-size: 0.8em;
    }

    p {
      font-size: 1.5em;
    }
  }
`;

export const ScrollableList = styled.div`
  max-height: 500px;
  overflow-y: auto;
  border-radius: 8px;
  border: 2px solid #ffd700;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: #ffd700;
    border-radius: 8px;

    &:hover {
      background: #ffed4e;
    }
  }

  @media (max-width: 480px) {
    max-height: 400px;
  }
`;
