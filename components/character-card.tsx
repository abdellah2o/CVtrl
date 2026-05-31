import { useThemeColor } from '@/hooks/use-theme-color';
import * as Clipboard from 'expo-clipboard';
import React, { useState } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { ThemedText } from './themed-text';

interface CharacterCardProps {
  character: string;
}

export function CharacterCard({ character }: CharacterCardProps) {
  const cardBackground = useThemeColor({}, 'cardBackground');
  const [copied, setCopied] = useState(false);

  const handlePress = async () => {
    setCopied(true);
    await Clipboard.setStringAsync(character);
    setTimeout(() => setCopied(false), 150);
  };

  return (
    <Pressable onPress={handlePress} style={[styles.card, { backgroundColor: copied ? 'green' : cardBackground }]}>
      <ThemedText style={styles.character}>{character}</ThemedText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 70,
    height: 60,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  character: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});