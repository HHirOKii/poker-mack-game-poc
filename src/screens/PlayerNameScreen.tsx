import { useState } from 'react';
import { motion } from 'framer-motion';
import * as S from '../styles/components';

interface PlayerNameScreenProps {
  onStart: (name: string) => void;
}

export function PlayerNameScreen({ onStart }: PlayerNameScreenProps) {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    const trimmedName = name.trim();
    if (!trimmedName) {
      setError('プレイヤー名を入力してください');
      return;
    }
    if (trimmedName.length > 20) {
      setError('20文字以内で入力してください');
      return;
    }
    onStart(trimmedName);
  };

  return (
    <S.Screen>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <S.Subtitle>プレイヤー情報</S.Subtitle>
        <p style={{ fontSize: '1.1em', marginBottom: '30px', color: '#e0e0e0' }}>
          プレイヤー名を入力してください
        </p>

        <S.Input
          type="text"
          placeholder="例: MACK Master"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setError('');
          }}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleSubmit();
            }
          }}
          maxLength={20}
          autoFocus
        />

        <p style={{ fontSize: '0.9em', color: '#888', marginBottom: '20px' }}>
          {name.length}/20
        </p>

        {error && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              fontSize: '1em',
              color: '#ff6b6b',
              marginBottom: '20px',
            }}
          >
            {error}
          </motion.p>
        )}

        <S.ButtonGroup>
          <S.Button onClick={handleSubmit} style={{ fontSize: '1.1em' }}>
            はじめる
          </S.Button>
        </S.ButtonGroup>
      </motion.div>
    </S.Screen>
  );
}
