import type { GameResult } from '../types/game';

const MIN_DISTANCE = 1;
const MAX_DISTANCE = 9;
const POWER_COEFFICIENT = 0.08;

export function calculateDistance(power: number, angle: number): GameResult {
  // 基本飛距離計算
  let baseDistance = power * POWER_COEFFICIENT + MIN_DISTANCE;
  baseDistance = Math.min(baseDistance, MAX_DISTANCE);

  // 角度補正
  let angleCorrection = 1;
  if (angle > 0) {
    angleCorrection = Math.cos((angle * Math.PI) / 180);
  }

  const finalDistance = baseDistance * angleCorrection;

  // 失敗判定: 角度が大きすぎると表になる確率UP
  const flipProbability = (angle / 90) * 0.7 + (power / 100) * 0.3;
  const success = Math.random() > flipProbability;

  const result: GameResult = {
    distance: Math.round(finalDistance * 100) / 100,
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
