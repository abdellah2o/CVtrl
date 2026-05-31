import { StyleSheet } from 'react-native';

import { CharacterGrid } from '@/components/character-grid';
import { ThemedView } from '@/components/themed-view';

const specialCharacters = [
  '«»', // Guillemets français
  '„“', // Guillemets allemands
  '""', // Guillemets doubles
  "''", // Guillemets simples
  '()', // Parenthèses
  '[]', // Crochets
  '{}', // Accolades
  '<>', // Chevrons
  '‹›', // Guillemets français simples
  '‚‘', // Guillemets allemands simples bas
  '‘’', // Guillemets simples curly
  '—', // Tiret cadratin
  '–', // Tiret demi-cadratin
  '…', // Points de suspension
  '©', // Copyright
  '®', // Marque déposée
  '™', // Marque commerciale
  '€', // Euro
  '£', // Livre sterling
  '¥', // Yen
  '§', // Paragraphe
  '¶', // Symbole paragraphe
  '‡', // Double croix
  '•', // Puce
  '‰', // Pour mille
];

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <CharacterGrid characters={specialCharacters} style={styles.grid} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 15,
    paddingVertical: 16,
    justifyContent: 'center',
    marginVertical: 50,
  },
});
