import * as S from '../styles/components';
import type { CardDesign, GameSettings, StageDesign } from '../types/game';

interface TitleScreenProps {
  onStart: () => void;
}

export function TitleScreen({ onStart }: TitleScreenProps) {
  return (
    <S.Screen>
      <S.Title>THE・マック</S.Title>
      <p style={{ fontSize: '1.2em', marginBottom: '30px' }}>
        ポーカーのマックで高さを競え！
      </p>
      <S.Button onClick={onStart} style={{ fontSize: '1.3em', padding: '20px 40px' }}>
        始める
      </S.Button>
    </S.Screen>
  );
}

interface PrepareScreenProps {
  settings: GameSettings;
  onSettingsChange: (settings: GameSettings) => void;
  onStart: () => void;
}

export function PrepareScreen({ settings, onSettingsChange, onStart }: PrepareScreenProps) {
  return (
    <S.Screen>
      <S.Subtitle>準備</S.Subtitle>

      <S.OptionGroup>
        <S.OptionLabel>カードデザイン:</S.OptionLabel>
        <S.OptionSelect
          value={settings.cardDesign}
          onChange={(e) =>
            onSettingsChange({
              ...settings,
              cardDesign: e.target.value as CardDesign,
            })
          }
        >
          <option value="classic">クラシック</option>
          <option value="gold">ゴールド</option>
          <option value="neon">ネオン</option>
          <option value="minimal">ミニマル</option>
        </S.OptionSelect>
      </S.OptionGroup>

      <S.OptionGroup>
        <S.OptionLabel>ステージ:</S.OptionLabel>
        <S.OptionSelect
          value={settings.stageDesign}
          onChange={(e) =>
            onSettingsChange({
              ...settings,
              stageDesign: e.target.value as StageDesign,
            })
          }
        >
          <option value="green">グリーン</option>
          <option value="blue">ブルー</option>
          <option value="burgundy">バーガンディ</option>
          <option value="modern">モダン</option>
        </S.OptionSelect>
      </S.OptionGroup>

      <S.ButtonGroup>
        <S.Button onClick={onStart}>スタート</S.Button>
        <S.Button onClick={() => {}} style={{ background: '#666' }}>
          戻る
        </S.Button>
      </S.ButtonGroup>
    </S.Screen>
  );
}
