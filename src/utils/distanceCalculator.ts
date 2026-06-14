import type { GameResult } from '../types/game';

const MIN_HEIGHT = 0.8;
const MAX_HEIGHT = 12;
const TARGET_ANGLE = 82;

export function calculateDistance(power: number, angle: number): GameResult {
  const launchAngle = Math.max(10, Math.min(95, angle));
  const verticalLift = Math.sin((launchAngle * Math.PI) / 180);
  const targetPenalty = Math.abs(launchAngle - TARGET_ANGLE) / TARGET_ANGLE;
  const overPowerPenalty = Math.max(0, power - 88) * 0.035;
  const rawHeight = MIN_HEIGHT + power * 0.125 * verticalLift;
  const finalHeight = Math.max(
    MIN_HEIGHT,
    Math.min(MAX_HEIGHT, rawHeight - targetPenalty * 2.2 - overPowerPenalty)
  );

  const wobbleRisk = targetPenalty * 0.55 + Math.max(0, power - 92) * 0.012;
  const success = power >= 20 && launchAngle >= 55 && launchAngle <= 94 && Math.random() > wobbleRisk;

  const result: GameResult = {
    distance: Math.round(finalHeight * 100) / 100,
    angle,
    power,
    success,
    timestamp: Date.now(),
  };

  if (!success) {
    result.failReason = 'flipped';
  }

  return result;
}
