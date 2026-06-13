import { useState, useEffect } from 'react';
import * as S from '../styles/components';

interface GaugeBarProps {
  label: string;
  description?: string;
  valueLabel?: (value: number) => string;
  onValueChange?: (value: number) => void;
  onConfirm: (value: number) => void;
}

export function GaugeBar({
  label,
  description,
  valueLabel,
  onValueChange,
  onConfirm,
}: GaugeBarProps) {
  const [value, setValue] = useState(50);
  const [isIncreasing, setIsIncreasing] = useState(true);

  useEffect(() => {
    onValueChange?.(value);
  }, [onValueChange, value]);

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
      {description && <S.GaugeDescription>{description}</S.GaugeDescription>}
      <S.GaugeBar>
        <S.GaugeFill $percentage={value} />
        <S.GaugeMarker style={{ left: '70%' }} />
      </S.GaugeBar>
      <S.GaugeScale>
        <span>弱い</span>
        <span>ねらい目</span>
        <span>強い</span>
      </S.GaugeScale>
      <S.GaugeValue>{valueLabel ? valueLabel(value) : Math.round(value)}</S.GaugeValue>
      <S.Button onClick={() => onConfirm(value)} style={{ marginTop: '15px' }}>
        決定！
      </S.Button>
    </S.GaugeContainer>
  );
}
