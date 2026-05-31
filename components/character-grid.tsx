import React from 'react';
import { ScrollView, StyleSheet, View, ViewStyle } from 'react-native';
import { CharacterCard } from './character-card';

interface CharacterGridProps {
  characters: string[];
  style?: ViewStyle;
}

export function CharacterGrid({ characters, style }: CharacterGridProps) {
  return (
    <View style={[styles.outer, style]}>
      <ScrollView contentContainerStyle={styles.grid} showsVerticalScrollIndicator={false} style={styles.scroll}>
        {characters.map((char, index) => (
          <CharacterCard key={index} character={char} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  outer: {
    flex: 1,
    justifyContent: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 15,
    paddingVertical: 16,
    justifyContent: 'center',
  },
  scroll: {
    flex: 0,
  },
});