import { useState, useEffect } from 'react';
import * as S from '../styles/components';

interface GaugeBarProps {
  label: string;
  onConfirm: (value: number) => void;
}

export function GaugeBar({ label, onConfirm }: GaugeBarProps) {
  const [value, setValue] = useState(50);
  const [isIncreasing, setIsIncreasing] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prev) => {
        let next = prev + (isIncreasing ? 2 : -2);
        if (next >= 100) {
          next = 100;
          setIsIncreasing(false);
        } else if (next <= 0) {
          next = 0;
          setIsIncreasing(true);
        }
        return next;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [isIncreasing]);

  return (
    <S.GaugeContainer>
      <S.GaugeLabel>{label}</S.GaugeLabel>
      <S.GaugeBar>
        <S.GaugeFill percentage={value} />
      </S.GaugeBar>
      <p style={{ marginTop: '10px', fontSize: '1.2em', color: '#4ade80' }}>
        {Math.round(value)}
      </p>
      <S.Button onClick={() => onConfirm(value)} style={{ marginTop: '15px' }}>
        決定！
      </S.Button>
    </S.GaugeContainer>
  );
}
