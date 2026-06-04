import * as S from '../styles/components';
import type { Hand } from '../types/game';

interface CardDisplayProps {
  hand?: Hand;
  isBack?: boolean;
  rotation?: number;
}

export function CardDisplay({ hand, isBack = true, rotation = 0 }: CardDisplayProps) {
  return (
    <S.Card rotate={rotation}>
      {isBack ? (
        <S.CardBack>♠♥♦♣</S.CardBack>
      ) : (
        <S.CardFront>
          {hand?.suits[0]} {hand?.ranks[0]} - {hand?.suits[1]} {hand?.ranks[1]}
        </S.CardFront>
      )}
    </S.Card>
  );
}
